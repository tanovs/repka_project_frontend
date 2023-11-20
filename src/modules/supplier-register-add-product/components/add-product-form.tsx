import { useForm } from "react-hook-form";
import InputWithTitle from "../../../UI/input-with-title/input-with-title";
import Toggle from "../../../UI/toggle/toggle";
import AttachmentUpload from "../../supplier-register/ui/attachment-upload/attachment-upload";
import WideButton from "../../../UI/wide-button/wide-button";
import { useState } from "react";
import { ButtonIcon } from "../../../UI/button-icon/button-icon";
import { ReactComponent as ThrashIcon } from "../../../assets/icons/thrash.svg";
import RepkaSelect, {
  RepkaSelectProps,
} from "../../../UI/repka-select/repka-select";
import { ProductPhotos } from "./product-photos";

type AddProductFormFields = {
  category: string;
  tag: string;
  title: string;
  photo: string;
  price: string;
  amount: string;
  amountLeft: string;
  KBJU: string;
  compound: string;
  bestBeforeAndOthers: string;
  brand: string;
  isFreeSample: string;
  freeSampleAmount: string;
};

export type AddProductFormProps = {
  currentIndex: number;
  availableForProductAdd: boolean;
  deleteButtonVisible?: boolean;
  onAddNewProduct: () => void;
  onDeleteProduct: () => void;
};

export default function AddProductForm({
  currentIndex,
  availableForProductAdd,
  deleteButtonVisible,
  onAddNewProduct,
  onDeleteProduct,
}: AddProductFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    resetField,
  } = useForm<AddProductFormFields>({
    mode: "onBlur",
    shouldUnregister: true,
    defaultValues: {},
  });
  const [isFreeSample, setIsFreeSample] = useState(false);
  const categoryOptions: RepkaSelectProps["options"] = [
    {
      label: "Овощи",
      value: "0",
    },
    {
      label: "Фрукты",
      value: "1",
    },
    {
      label: "Мясо",
      value: "2",
    },
  ];
  const tagOptions: RepkaSelectProps["options"] = [
    {
      label: "Молоко",
      value: "0",
    },
    {
      label: "Огурцы",
      value: "1",
    },
    {
      label: "Свинина",
      value: "2",
    },
  ];

  return (
    <div className="[&>*]:mb-5">
      {deleteButtonVisible && (
        <div className="flex items-center justify-between text-h2_m text-text-3">
          <div>№{currentIndex}</div>
          <ButtonIcon onClick={onDeleteProduct}>
            <ThrashIcon />
          </ButtonIcon>
        </div>
      )}
      <RepkaSelect
        label="Выберите категорию товара"
        options={categoryOptions}
      />

      <RepkaSelect label="Выберите тэг товара" options={tagOptions} />
      {/* <InputWithTitle
        key={"tag"}
        registerInputFoo={register("tag")}
        label="Выберите тэг товара"
        error={errors.tag}
      /> */}
      <InputWithTitle
        key={"title"}
        registerInputFoo={register("title")}
        label="Наименование товара"
        error={errors.title}
      />
      <ProductPhotos />
      <InputWithTitle
        key={"price"}
        registerInputFoo={register("price")}
        label="Цена товара"
        error={errors.price}
      />
      <InputWithTitle
        key={"amount"}
        registerInputFoo={register("amount")}
        label="Объём товара за указанную цену"
        error={errors.amount}
      />
      <InputWithTitle
        key={"amountLeft"}
        registerInputFoo={register("amountLeft")}
        label="Остаток товара в фасовке / кг. / л."
        error={errors.amountLeft}
      />
      <InputWithTitle
        key={"KBJU"}
        registerInputFoo={register("KBJU")}
        label="КБЖУ"
        error={errors.KBJU}
      />
      <InputWithTitle
        key={"compound"}
        registerInputFoo={register("compound")}
        label="Состав"
        error={errors.compound}
      />
      <InputWithTitle
        key={"bestBeforeAndOthers"}
        registerInputFoo={register("bestBeforeAndOthers")}
        label="Срок годности и условия хранения"
        error={errors.bestBeforeAndOthers}
      />
      <InputWithTitle
        key={"brand"}
        registerInputFoo={register("brand")}
        label="Бренд, производитель"
        error={errors.brand}
      />
      <Toggle
        key={"isFreeSample"}
        text="Товар предоставляется, как бесплатный образец"
        onChange={setIsFreeSample}
      />
      {isFreeSample && (
        <InputWithTitle
          key={"freeSampleAmount"}
          registerInputFoo={register("freeSampleAmount")}
          label="Кол-во бесплатного товара"
          error={errors.brand}
        />
      )}
      {availableForProductAdd && (
        <WideButton
          className="mt-9 w-full"
          color="secondary"
          primaryText="Добавить товар"
          onClick={onAddNewProduct}
        />
      )}
    </div>
  );
}
