import { useNavigate } from "react-router-dom";
import SingleButtonPageWrapper from "../single-button-page-wrapper/single-button-page-wrapper";
import { IMAGES } from "@/shared/utils/images";

export default function SupplierRegistrationOffer() {
  const navigate = useNavigate();

  return (
    <SingleButtonPageWrapper
      title="Стать поставщиком"
      buttonText="Заполнить форму"
      secondaryText="Чтобы попасть в базу сервиса, вам нужно заполнить форму с информацией о вашей компании и товарах."
      onMainButtonClick={() => navigate("../")}
      onBackButtonClick={() => navigate("../../")}
    >
      <img src={IMAGES.supplierRegistration} />
    </SingleButtonPageWrapper>
  );
}
