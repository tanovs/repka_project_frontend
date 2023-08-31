import { useNavigate } from "react-router-dom";
import { ReactComponent as SupplierRegistrationImage } from "../../assets/icons/supplier-registration-image.svg";
import SingleButtonPageWrapper from "../single-button-page-wrapper/single-button-page-wrapper";

export default function SupplierRegistrationOffer() {
  const navigate = useNavigate();

  return (
    <SingleButtonPageWrapper
      title="Стать поставщиком"
      buttonText="Заполнить форму"
      primaryText="Мы отправили ваш заказ!"
      secondaryText="Чтобы попасть в базу сервиса, вам нужно заполнить форму с информацией о вашей компании и товарах."
      onMainButtonClick={() => navigate("../")}
    >
      <SupplierRegistrationImage />
    </SingleButtonPageWrapper>
  );
}
