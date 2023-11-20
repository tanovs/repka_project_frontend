import { useForm, SubmitHandler } from "react-hook-form";
import InputWithTitle from "../../../UI/input-with-title/input-with-title";
import WideButton from "../../../UI/wide-button/wide-button";
import AttachmentUpload from "../ui/attachment-upload/attachment-upload";
import { NotificationBlock } from "../../../UI/notification-block/notification-block";
import { forwardRef, useImperativeHandle, useRef } from "react";

type SupplierRegisterDocumentsFields = {
  supplierType: string;
  ogrn: string;
  inn: string;
  sertificateLink: string;
};

export const SupplierRegisterDocuments = forwardRef(
  (props: { formStepChange: () => void }, ref) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<SupplierRegisterDocumentsFields>({
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
      <form ref={formRef} onSubmit={handleSubmit(onSuccessfulSubmit)}>
        <div className="[&>*]:mb-5 last:[&>*]:m-0">
          <InputWithTitle
            label="ООО / ИП / Самозанятость"
            registerInputFoo={register("supplierType", { required: true })}
            id={"3143312"}
            error={errors.supplierType}
            key={"supplierType"}
          />
          <InputWithTitle
            label="ОГРН"
            registerInputFoo={register("ogrn")}
            key={"ogrn"}
          />
          <InputWithTitle
            label="ИНН"
            registerInputFoo={register("inn")}
            key={"inn"}
          />
          <AttachmentUpload
            title="Добавить сертификат"
            size="medium"
            attachmentType="image"
            onAttachmentChange={() => {}}
            key={"companyImage"}
          />
          <NotificationBlock
            color="secondary"
            text="Вы можете  добавить сертификаты, подтверждающие качество ваших продуктов,а также прикрепить ссылку на оригинал сертификата, если такой имеется в доступе."
          />
          <InputWithTitle
            label="Ссылка на сертификат"
            registerInputFoo={register("sertificateLink")}
            key={"sertificateLink"}
          />
        </div>
      </form>
    );
  }
);
