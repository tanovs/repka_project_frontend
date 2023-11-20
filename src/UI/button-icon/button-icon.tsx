export type ButtonIconProps = {
  children: React.ReactNode;
  onClick?: () => void;
  hasBackground?: boolean;
  backgroundColor?: "dark" | "light";
  className?: string;
};

export function ButtonIcon({
  children,
  onClick,
  hasBackground,
  backgroundColor,
  className,
}: ButtonIconProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${
        className || ""
      } flex items-center justify-center rounded-full p-0 ${
        hasBackground &&
        `h-8 w-8 ${
          backgroundColor === "dark" ? "bg-[#000000B2]" : "bg-basic-2"
        }`
      }`}
    >
      {children}
    </button>
  );
}
``;
