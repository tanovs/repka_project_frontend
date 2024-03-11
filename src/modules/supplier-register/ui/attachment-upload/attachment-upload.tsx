import { useState } from "react";
import { ReactComponent as AttachmentAddIcon } from "../../../../assets/icons/attachment-add.svg";
import { ReactComponent as CrossIcon } from "../../../../assets/icons/cross-background.svg";
import { ButtonIcon } from "../../../../UI/button-icon/button-icon";

export type AttachmentUploadType = {
  title: string;
  size: "small" | "medium" | "large";
  attachmentType: "image" | "document";
  disabled?: boolean;
  uploaderOnly?: boolean;
  uploadedPhotoSrc?: string;
  onAttachmentChange?: (file: File) => void;
  onDeleteClick?: () => void;
};

export default function AttachmentUpload({
  title,
  size,
  attachmentType,
  disabled,
  uploaderOnly,
  uploadedPhotoSrc,
  onAttachmentChange,
  onDeleteClick,
}: AttachmentUploadType) {
  const acceptFiles =
    attachmentType === "image"
      ? "image/png, image/gif, image/jpeg"
      : "application/pdf, application/vnd.ms-excel";
  let containerSizeClasses = "";
  let imageSizeClasses = "";
  const [imageSrc, setImageSrc] = useState<string>("");
  switch (size) {
    case "small":
      containerSizeClasses = "h-24 w-24 py-4 px-3";
      imageSizeClasses = "h-7 w-7";
      break;
    case "medium":
      containerSizeClasses = "h-40 w-36 px-5 py-6";
      imageSizeClasses = "h-16 w-16";
      break;
    case "large":
      containerSizeClasses = "w-full h-40 px-5 py-6";
      imageSizeClasses = "h-16 w-16";
      break;
  }

  function onFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const [file] = Array.from(e.target.files || []);
    if (!file) {
      return;
    }
    if (!uploaderOnly && attachmentType === "image") {
      setImageSrc(URL.createObjectURL(file));
    }
    onAttachmentChange && onAttachmentChange(file);
  }

  return (
    <div
      className={`relative ${containerSizeClasses} flex flex-col items-center justify-between  overflow-hidden rounded-2xl border border-basic-3 text-center`}
    >
      {(uploadedPhotoSrc || imageSrc) && (
        <div
          className="absolute top-0 h-full w-full bg-basic-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${uploadedPhotoSrc || imageSrc})` }}
        >
          {onDeleteClick && (uploadedPhotoSrc || imageSrc) && (
            <ButtonIcon
              className="absolute right-2 top-2"
              onClick={onDeleteClick}
            >
              <CrossIcon className="h-6 w-6" />
            </ButtonIcon>
          )}
        </div>
      )}
      <input
        className="absolute h-full w-full opacity-0"
        disabled={disabled}
        type="file"
        accept={acceptFiles}
        onChange={onFileUpload}
      />
      <AttachmentAddIcon className={imageSizeClasses} />
      <div className="text-b4_m text-text-2">{title}</div>
    </div>
  );
}
