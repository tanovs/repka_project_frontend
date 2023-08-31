import { useState } from "react";
import { ReactComponent as AttachmentAddIcon } from "../../../../assets/icons/attachment-add.svg";

export type AttachmentUploadType = {
  title: string;
  size: "small" | "medium" | "large";
  attachmentType: "image" | "document";
  onAttachmentChange: (file: File) => void;
};

export default function AttachmentUpload({
  title,
  size,
  attachmentType,
  onAttachmentChange,
}: AttachmentUploadType) {
  const acceptFiles =
    attachmentType === "image"
      ? "image/png, image/gif, image/jpeg"
      : "application/pdf, application/vnd.ms-excel";
  let containerSizeClasses: string = "";
  let imageSizeClasses: string = "";
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
    if (attachmentType === "image") {
      setImageSrc(URL.createObjectURL(file));
    }
    onAttachmentChange(file);
  }

  return (
    <div
      className={`relative ${containerSizeClasses} flex flex-col items-center justify-between  overflow-hidden rounded-2xl border border-basic-3 text-center`}
    >
      {imageSrc && (
        <div
          className="absolute top-0 h-full w-full bg-basic-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imageSrc})` }}
        ></div>
      )}
      <input
        className="absolute h-full w-full opacity-0"
        type="file"
        accept={acceptFiles}
        onChange={onFileUpload}
      />
      <AttachmentAddIcon className={imageSizeClasses} />
      <div className="text-b4_m text-text-2">{title}</div>
    </div>
  );
}
