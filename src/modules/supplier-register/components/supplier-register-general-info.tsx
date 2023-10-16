import { SubmitHandler, UseFormReturn, useForm } from "react-hook-form";
import InputWithTitle from "../../../UI/input-with-title/input-with-title";
import AttachmentUpload from "../ui/attachment-upload/attachment-upload";
import WideButton from "../../../UI/wide-button/wide-button";
import { useFormDataContext } from "../../../pages/supplier-register-form";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import React from "react";

type SupplierRegisterGeneralInfoFields = {
  companyTitle: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  webSite: string;
  socials: string;
};

// export type SupplierRegisterGeneralInfo = {
//   onSubmit: (data: unknown) => void;
// }

export const SupplierRegisterGeneralInfo = React.forwardRef(
  (props: { formStepChange: () => void }, ref) => {
    const formRef = useRef<HTMLFormElement>(null);
    useImperativeHandle(ref, () => ({
      submitForm: () => {
        formRef.current?.dispatchEvent(
          new Event("submit", { cancelable: true, bubbles: true })
        );
      },
    }));
    const {
      register,
      handleSubmit,
      formState: { errors, isDirty },
      reset,
      resetField,
    } = useForm<SupplierRegisterGeneralInfoFields>({
      mode: "onBlur",
    });

    const test = useFormDataContext();
    console.log(test);

    const onSuccessfulSubmit: SubmitHandler<any> = (data: any) => {
      console.log(data);
      // setFormData({ ...formData });
      // reset(data);
      props.formStepChange();
    };

    return (
      <form ref={formRef} onSubmit={handleSubmit(onSuccessfulSubmit)}>
        <div className="[&>*]:mb-5 last:[&>*]:m-0">
          <InputWithTitle
            label="Название компании"
            registerInputFoo={register("companyTitle", { required: true })}
            error={errors.companyTitle}
            id={"1"}
            key={"companyTitle"}
          />
          <InputWithTitle
            label="Контактное лицо"
            registerInputFoo={register("name", { required: true })}
            key={"name"}
          />
          <InputWithTitle
            label="Номер телефона"
            registerInputFoo={register("phone", { required: true })}
            key={"phone"}
          />
          <InputWithTitle
            label="Email"
            registerInputFoo={register("email", { required: true })}
            key={"email"}
          />
          <InputWithTitle
            label="Адрес компании"
            registerInputFoo={register("address")}
            key={"address"}
          />
          <InputWithTitle label="Сайт" registerInputFoo={register("webSite")} />
          <InputWithTitle
            label="Социальные сети"
            registerInputFoo={register("socials")}
            key={"socials"}
          />
          <AttachmentUpload
            title="Логотип компании"
            size="small"
            attachmentType="image"
            onAttachmentChange={() => {}}
            key={"companyLogo"}
          />
          <AttachmentUpload
            title="Добавить обложку профиля компании"
            size="large"
            attachmentType="image"
            onAttachmentChange={() => {}}
            key={"companyImage"}
          />
        </div>
        {/* <div className="sticky bottom-0 flex w-full justify-center rounded-t-2xl bg-basic-0 p-5 shadow-upper">
        <WideButton color="primary" primaryText="Далее" type="submit" />
      </div> */}
      </form>
    );
  }
);
