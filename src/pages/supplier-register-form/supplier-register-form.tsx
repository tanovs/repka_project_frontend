import { SubmitHandler, useForm } from "react-hook-form";
import { HeaderWithButtons } from "../../UI/header-with-back-button/header-with-back-button";
import ProgressBar from "../../UI/progress-bar/progress-bar";
import WideButton from "../../UI/wide-button/wide-button";
import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { FormSteps, SupplierRegisterFormStep } from "./form-steps";
import { useNavigate } from "react-router-dom";
import {
  SupplierRegisterDocuments,
  SupplierRegisterGeneralInfo,
  SupplierRegisterShipping,
} from "../../modules/supplier-register";

const FormDataContext = createContext({});

export function useFormDataContext() {
  const context = useContext(FormDataContext);
  if (!context) {
    throw Error("Form data context must me used in supplier form.");
  }

  return context;
}

export default function SupplierRegisterForm() {
  const [formStep, setFormStep] = useState<{
    step: number;
    stepObject: SupplierRegisterFormStep;
  }>({
    step: 0,
    stepObject: FormSteps[0],
  });
  const formData = useState({});
  const navigate = useNavigate();

  const onFormStepChange = (isBack?: boolean) => {
    let newStepIndex = formStep.step;

    if (isBack && newStepIndex === 0) {
      navigate("./welcome");
    } else if (!isBack && newStepIndex === FormSteps.length - 1) {
      navigate("./form-complete");
    }

    if (isBack) {
      newStepIndex = (formStep.step - 1) % FormSteps.length;
    } else if (!isBack && newStepIndex !== FormSteps.length - 1) {
      newStepIndex = (formStep.step + 1) % FormSteps.length;
    }
    setFormStep({
      step: newStepIndex,
      stepObject: FormSteps[newStepIndex],
    });
  };

  // const CurrentFormComponent = () =>
  //   formStep.stepObject.currentComponent.render(onFormStepChange);
  const childRef = useRef<{ submitForm: () => void }>();

  return (
    <div className="h-screen w-full bg-[#F4F4F4] pt-beforeContent">
      <div className="mb-24 h-full w-full rounded-t-2xl bg-basic-0">
        <HeaderWithButtons
          title="Стать поставщиком"
          onLeftButtonClick={() => onFormStepChange(true)}
        />
        <div className="m-5">
          <div className="mb-2 text-h2_m text-text-3">
            {formStep.stepObject.title}
          </div>
          <ProgressBar
            className="mb-6"
            progressPersentage={formStep.stepObject.progressPersentage}
          />
          <FormDataContext.Provider value={formData}>
            {formStep.stepObject.step === "general" && (
              <SupplierRegisterGeneralInfo
                formStepChange={onFormStepChange}
                ref={childRef}
              />
            )}
            {formStep.stepObject.step === "delivery" && (
              <SupplierRegisterShipping
                formStepChange={onFormStepChange}
                ref={childRef}
              />
            )}
            {formStep.stepObject.step === "documents" && (
              <SupplierRegisterDocuments
                formStepChange={onFormStepChange}
                ref={childRef}
              />
            )}
          </FormDataContext.Provider>
        </div>
      </div>
      <div className="sticky bottom-0 flex w-full justify-center rounded-t-2xl bg-basic-0 p-5 shadow-upper">
        <WideButton
          onClick={() => childRef.current?.submitForm()}
          className="w-full"
          color="primary"
          primaryText="Далее"
        />
      </div>
    </div>
  );
}
