import { useNavigate } from "react-router-dom";
import { HeaderWithButtons } from "../../UI/header-with-back-button/header-with-back-button";
import WideButton from "../../UI/wide-button/wide-button";
import { useContext } from "react";
import { ConfirmDialogContext } from "../supplier-register-wrapper/supplier-register-wrapper";

export default function SupplierFormComplete() {
  const navigate = useNavigate();
  const openSkipDialog = useContext(ConfirmDialogContext);

  return (
    <div className="absolute h-screen w-full bg-extra-2">
      <div className="relative mx-5 h-full pt-beforeContent">
        <HeaderWithButtons
          title={"Стать поставщиком"}
          light
          className="!mx-0"
          onLeftButtonClick={() => navigate("../")}
        />
        <div className="mt-14 flex flex-col justify-between">
          <div className="flex flex-col items-stretch justify-between text-center">
            <div className="mb-20 text-h2_m text-basic-0">
              Вы заполнили анкету! Осталось добавить товары.
            </div>
            <div className="flex flex-col">
              <WideButton
                className="mb-5 w-full"
                primaryText={"Добавить товары вручную"}
                color="primary"
                onClick={() => navigate("../add-products")}
              />
              <WideButton
                className="w-full"
                primaryText={"Загрузить Excel с товарами"}
                color="secondary"
                onClick={() => navigate("../upload-documents")}
              />
            </div>
          </div>
          <WideButton
            className="absolute bottom-24 w-full"
            primaryText={"Пропустить"}
            color="secondary"
            onClick={() => openSkipDialog(true)}
          />
        </div>
      </div>
    </div>
  );
}
