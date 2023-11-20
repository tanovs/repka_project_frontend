import { useState } from "react";
import AttachmentUpload from "../../supplier-register/ui/attachment-upload/attachment-upload";

export function ProductPhotos() {
  const [photos, setPhotos] = useState<File[]>([]);
  const onDeletePhotoClick = (indx: number) => {
    const newPhotos = [...photos];
    newPhotos.splice(indx, 1);
    setPhotos(newPhotos);
  };
  return (
    <div className="flex flex-wrap justify-between gap-5">
      {photos.length <= 2 && (
        <AttachmentUpload
          key="imageUploader"
          title="Добавить фото товара"
          attachmentType="image"
          size="medium"
          uploaderOnly
          onAttachmentChange={(inputPhoto) =>
            setPhotos([...photos, inputPhoto])
          }
        />
      )}
      {photos.map((photo, index) => (
        <AttachmentUpload
          key={index}
          title="Добавить фото товара"
          attachmentType="image"
          size="medium"
          disabled
          uploadedPhotoSrc={URL.createObjectURL(photos[index])}
          onAttachmentChange={() => {}}
          onDeleteClick={() => onDeletePhotoClick(index)}
        />
      ))}
    </div>
  );
}
