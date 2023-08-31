import { useNavigate } from "react-router-dom";
import { HeaderWithButtons } from "../../UI/header-with-back-button/header-with-back-button";
import SupplierDocumentUpload from "../../modules/supplier-document-upload";

export default function SupplierDocumentUploadPage() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full bg-extra-2 pt-beforeContent">
      <div className="relative h-full w-full rounded-t-2xl bg-basic-0 px-5">
        <HeaderWithButtons
          className="mx-0 mb-5"
          title="Стать поставщиком"
          onLeftButtonClick={() => navigate(-1)}
        />
        <div>
          <SupplierDocumentUpload />
        </div>
      </div>
    </div>
  );
}
