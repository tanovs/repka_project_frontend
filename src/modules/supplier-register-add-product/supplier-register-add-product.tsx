import { useNavigate } from "react-router-dom";
import { HeaderWithButtons } from "../../UI/header-with-back-button/header-with-back-button";
import ProgressBar from "../../UI/progress-bar/progress-bar";
import AddProductForm from "./components/add-product-form";
import { useContext, useState } from "react";
import { ReactComponent as SchevronIcon } from "../../assets/icons/schevron.svg";
import { ConfirmDialogContext } from "../../pages/supplier-register-wrapper/supplier-register-wrapper";

export default function SupplierRegisterAddProduct() {
  const navigate = useNavigate();
  const onDeleteProduct = (index: number) => {
    const newProductForms = [...productFormIndex];
    newProductForms.splice(index, 1);
    setProductFormIndexes(newProductForms);
  };
  const skipDialogContext = useContext(ConfirmDialogContext);
  const [productFormIndex, setProductFormIndexes] = useState<number[]>([0]);

  return (
    <>
      <div className="relative mb-2 h-auto w-full rounded-2xl bg-basic-0 pb-5 pt-1">
        <HeaderWithButtons
          className="mx-0 mb-5 mt-1"
          title="Стать поставщиком"
          onLeftButtonClick={() => navigate(-1)}
          onRightButtonClick={() => skipDialogContext(true)}
        >
          <SchevronIcon className="-rotate-90" />
        </HeaderWithButtons>
        <div className="px-5">
          <div>
            <div className="mb-1 flex items-center justify-between text-text-3">
              <div className="text-h2_m">Товары</div>
              <div className="text-b2_m">Кол-во: {productFormIndex.length}</div>
            </div>
            <ProgressBar className="mb-6" progressPersentage={90} />
            <AddProductForm
              currentIndex={productFormIndex[0] + 1}
              availableForProductAdd={productFormIndex.length === 1}
              deleteButtonVisible={productFormIndex.length > 1}
              onAddNewProduct={() =>
                setProductFormIndexes([
                  ...productFormIndex,
                  productFormIndex.length,
                ])
              }
              onDeleteProduct={() => onDeleteProduct(0)}
            />
          </div>
        </div>
      </div>
      {productFormIndex.slice(1).map((props, indx) => (
        <div
          className="relative mb-2 h-auto w-full rounded-2xl bg-basic-0 px-5 pb-5 pt-4"
          key={indx}
        >
          <AddProductForm
            currentIndex={indx + 2}
            availableForProductAdd={indx + 2 === productFormIndex.length}
            deleteButtonVisible
            onAddNewProduct={() =>
              setProductFormIndexes([
                ...productFormIndex,
                productFormIndex.length,
              ])
            }
            onDeleteProduct={() => onDeleteProduct(indx + 1)}
          />
        </div>
      ))}
    </>
  );
}
