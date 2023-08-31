import { useRef } from "react";
import { NotificationBlock } from "../../../UI/notification-block/notification-block";
import WideButton from "../../../UI/wide-button/wide-button";

export type SupplierEmptyDocumentsProps = {
  onDocumentsAdd: (file: File) => void;
  onSkipButtonClick: () => void;
  onDownloadButtonClick: () => void;
};

export default function SupplierEmptyDocuments({
  onDocumentsAdd,
  onDownloadButtonClick,
  onSkipButtonClick,
}: SupplierEmptyDocumentsProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const onFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [file] = Array.from(e.target.files || []);
    onDocumentsAdd(file);
  };

  return (
    <>
      <div className="mb-2 text-h2_m text-text-3">Документ с товарами</div>
      <NotificationBlock
        color="info"
        text="Для более подробного заполнения карточек товаров рекомендуется заполнить Excel-шаблон. Потом загрузите заполненный шаблон, как свой документ."
      />
      <div className="mt-16">
        <WideButton
          className="mb-5 w-full"
          color="primary"
          primaryText="Скачать Excel-шаблон"
          onClick={onDownloadButtonClick}
        />
        <WideButton
          className="w-full"
          color="secondary"
          primaryText="Загрузить свой документ"
          onClick={() => inputRef.current?.click()}
        />
        <input
          className="hidden"
          ref={inputRef}
          onChange={(e) => onFileUpload(e)}
          type="file"
        />
      </div>
      <div className="absolute bottom-7 right-0 w-full px-5">
        <WideButton
          className="w-full"
          color="secondary"
          primaryText="Пропустить"
          onClick={onSkipButtonClick}
        />
      </div>
    </>
  );
}
