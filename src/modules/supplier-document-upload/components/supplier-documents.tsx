import { useRef } from "react";
import ProgressBar from "../../../UI/progress-bar/progress-bar";
import UploadedFile from "../../../UI/uploaded-file/uploaded-file";
import WideButton from "../../../UI/wide-button/wide-button";

export type SupplierDocumentsProps = {
  documents: File[];
  onDocumentDelete: (fileIndex: number) => void;
  onDocumentsAdd: (file: File) => void;
  onFormSubmit: () => void;
};

export default function SupplierDocuments({
  documents,
  onDocumentsAdd,
  onDocumentDelete,
  onFormSubmit,
}: SupplierDocumentsProps) {
  const documentComponents = documents.map((doc, index) => (
    <UploadedFile
      key={index}
      fileName={doc.name}
      onFileDelete={() => onDocumentDelete(index)}
    />
  ));
  const inputRef = useRef<HTMLInputElement>(null);
  const onFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [file] = Array.from(e.target.files || []);
    onDocumentsAdd(file);
  };

  return (
    <>
      <div className="mb-2 text-h2_m text-text-3">Документ загружен</div>
      <ProgressBar className="mb-6" progressPersentage={100} />
      <div className="grid grid-cols-2 justify-items-center gap-x-1 gap-y-3 break-words">
        {documentComponents}
      </div>
      <div className="fixed bottom-8 right-0 flex w-full flex-col px-5">
        <WideButton
          className="mb-6"
          color="primary"
          primaryText="Отправить форму"
          onClick={onFormSubmit}
        />
        <WideButton
          color="secondary"
          primaryText="Добавить документ"
          onClick={() => inputRef.current?.click()}
        />
        <input
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={onFileUpload}
        />
      </div>
    </>
  );
}
