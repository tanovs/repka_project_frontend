import SupplierRegisterAddProduct from "../../modules/supplier-register-add-product";
import WideButton from "../../UI/wide-button/wide-button";

export default function SupplierProductAddPage() {
  return (
    <div className="h-full w-full overflow-auto bg-[#F4F4F4] pt-beforeContent">
      <SupplierRegisterAddProduct />
      <div className="sticky bottom-0 w-full rounded-t-2xl bg-basic-0 p-5 pb-7">
        <WideButton
          className="w-full"
          color="primary"
          primaryText="Отправить форму"
        />
      </div>
    </div>
  );
}
