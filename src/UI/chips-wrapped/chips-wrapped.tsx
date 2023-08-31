import { ReactElement } from "react";
import { ChipProps } from "../chip/chip";

export type ChipsWrappedProps = {
  children: ReactElement<ChipProps> | Array<ReactElement<ChipProps>>;
  className?: string;
  scrollable?: boolean;
};

export default function ChipsWrapped({
  children,
  scrollable,
  className,
}: ChipsWrappedProps) {
  return (
    <div
      className={`${className} leading-10 ${
        scrollable && "flex h-auto items-center overflow-x-auto"
      }`}
    >
      {children}
    </div>
  );
}
