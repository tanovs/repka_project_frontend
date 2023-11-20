import { useNavigate } from "react-router-dom";
import { ReactComponent as CompleteOrderImage } from "../../assets/icons/order-complete-image.svg";
import SingleButtonPageWrapper from "../single-button-page-wrapper/single-button-page-wrapper";

export default function OrderComplete() {
  const navigate = useNavigate();

  return (
    <SingleButtonPageWrapper
      buttonText="Посмотреть данные заказа"
      title="Подтверждение заказа"
      primaryText="Мы отправили ваш заказ!"
      secondaryText="Поставщик с вами свяжется по указанным контактам для подтверждения заказа"
      onBackButtonClick={() => navigate("/cart")}
      onMainButtonClick={() => navigate("../order-data/1")}
    >
      <CompleteOrderImage />
    </SingleButtonPageWrapper>
  );
}
