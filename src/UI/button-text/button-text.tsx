export type ButtonTextProps = {
  text: string;
  onClick?: () => void;
};

export function ButtonText({ text, onClick }: ButtonTextProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="flex h-auto w-fit items-center justify-center p-0 text-b3_m text-text-1"
    >
      {text}
    </button>
  );
}
