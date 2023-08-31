import WideButton from "../wide-button/wide-button";

export type UploadedFileProps = {
  fileName: string;
  onFileDelete: () => void;
};

export default function UploadedFile({
  fileName,
  onFileDelete,
}: UploadedFileProps) {
  return (
    <div className="flex h-52 w-36 flex-col items-center">
      <div className="mb-3 h-full w-28 shadow-upper">
        <div className="mt-1 w-full text-center text-b3_m text-text-1">
          {fileName}
        </div>
      </div>
      <WideButton
        className="h-10 w-full"
        color="secondary"
        primaryText="Удалить"
        small
        onClick={onFileDelete}
      />
    </div>
  );
}
