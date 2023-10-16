import { SubmitHandler, UseFormReturn, useForm } from "react-hook-form";
import InputWithTitle from "../../../UI/input-with-title/input-with-title";
import AttachmentUpload from "../ui/attachment-upload/attachment-upload";
import WideButton from "../../../UI/wide-button/wide-button";
import { useRef, useImperativeHandle, forwardRef } from "react";
import RepkaSelect from "../../../UI/repka-select/repka-select";

export type SupplierRegisterShippingFields = {
  cities: string;
  area: string;
  shippingTime: string;
  shippingDuration: string;
  minOrderPrice: string;
  availableDays: string;
};

export const SupplierRegisterShipping = forwardRef(
  (props: { formStepChange: () => void }, ref) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<SupplierRegisterShippingFields>({
      mode: "onBlur",
    });

    const formRef = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref, () => ({
      submitForm() {
        formRef.current?.dispatchEvent(
          new Event("submit", { cancelable: true, bubbles: true })
        );
      },
    }));

    const onSuccessfulSubmit: SubmitHandler<any> = (data: any) => {
      console.log(data);
      // setFormData({ ...formData });
      props.formStepChange();
    };

    return (
      <>
        <form ref={formRef} onSubmit={handleSubmit(onSuccessfulSubmit)}>
          <div className="[&>*]:mb-5 last:[&>*]:m-0">
            <RepkaSelect
              label="Города доставки"
              multi
              options={[
                { value: "0", label: "Новосбирск" },
                { value: "1", label: "Нижний Новгород" },
                { value: "2", label: "Санкт-Петербург" },
              ]}
              registerInputFoo={register("cities", { required: false })}
              error={errors.cities}
              key={"cities"}
            ></RepkaSelect>
            <RepkaSelect
              label="Области доставки"
              multi
              options={[
                { value: "0", label: "Московская область" },
                { value: "1", label: "Ставропольский край" },
                { value: "2", label: "Воронежская область" },
              ]}
              registerInputFoo={register("area", { required: false })}
              error={errors.area}
              key={"area"}
            ></RepkaSelect>
            {/* <InputWithTitle
              label="Города доставки"
              registerInputFoo={register("cities", { required: true })}
              id={"3143312"}
              error={errors.cities}
              key={"cities"}
            /> */}
            {/* <InputWithTitle
              label="Области доставки"
              registerInputFoo={register("area", { required: true })}
              error={errors.area}
              key={"area"}
            /> */}
            <InputWithTitle
              label="Время и дни доставки"
              registerInputFoo={register("shippingTime", { required: true })}
              error={errors.shippingTime}
              key={"shippingTime"}
            />
            <InputWithTitle
              label="Сроки доставки"
              registerInputFoo={register("shippingDuration", {
                required: true,
              })}
              error={errors.shippingDuration}
              key={"shippingDuration"}
            />
            <InputWithTitle
              label="Минимальная цена заказа"
              registerInputFoo={register("minOrderPrice", { required: true })}
              error={errors.minOrderPrice}
              key={"minOrderPrice"}
            />
            <InputWithTitle
              label="Дни и время приёма заказов"
              registerInputFoo={register("availableDays", { required: true })}
              error={errors.availableDays}
              key={"availableDays"}
            />
          </div>
        </form>
      </>
    );
  }
);
