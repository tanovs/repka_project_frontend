import { useContext, useRef, useState } from "react";
import { ConfirmDialogContext } from "../../pages/supplier-register-wrapper/supplier-register-wrapper";
import { NotificationBlock } from "../../UI/notification-block/notification-block";
import WideButton from "../../UI/wide-button/wide-button";
import SupplierEmptyDocuments from "./components/supplier-empty-documents";
import SupplierDocuments from "./components/supplier-documents";
import { useNavigate } from "react-router-dom";

export default function SupplierDocumentUpload() {
  const [documents, setDocuments] = useState<File[]>([]);
  const navigate = useNavigate();
  const openSkipDialog = useContext(ConfirmDialogContext);
  const onDocumentDelete = (docId: number) => {
    const newDocsArr = [...documents];
    newDocsArr.splice(docId, 1);
    setDocuments(newDocsArr);
  };

  return documents.length === 0 ? (
    <SupplierEmptyDocuments
      onDocumentsAdd={(file) => setDocuments([...documents, file])}
      onDownloadButtonClick={() => {}}
      onSkipButtonClick={() => openSkipDialog(true)}
    />
  ) : (
    <SupplierDocuments
      documents={documents}
      onDocumentDelete={onDocumentDelete}
      onDocumentsAdd={(file) => setDocuments([...documents, file])}
      onFormSubmit={() => navigate("../registration-complete")}
    />
  );
}
