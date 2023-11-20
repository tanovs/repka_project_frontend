import { useNavigate } from "react-router-dom";
import { ReactComponent as SupplierRegistrationImage } from "../../assets/icons/supplier-registration-image.svg";
import SingleButtonPageWrapper from "../single-button-page-wrapper/single-button-page-wrapper";
import { ReactComponent as CompleteOrderImage } from "../../assets/icons/order-complete-image.svg";

export default function SupplierRegistrationComplete() {
  const navigate = useNavigate();

  return (
    <SingleButtonPageWrapper
      title="Стать поставщиком"
      buttonText="Вернуться на главную"
      primaryText="Мы получили ваши данные!"
      secondaryText="Мы свяжемся с вами по электронной почте, когда ваша заявка пройдет модерацию и опубликуется в базе."
      onMainButtonClick={() => navigate("/")}
    >
      <CompleteOrderImage />
    </SingleButtonPageWrapper>
  );
}
