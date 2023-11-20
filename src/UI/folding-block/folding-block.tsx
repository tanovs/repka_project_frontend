import { useState } from "react";
import { ReactComponent as SchevronLogo } from "../../assets/icons/schevron.svg";

export type FoldingBlockProps = {
  title: string;
  children?: React.ReactNode;
};

export default function FoldingBlock({ title, children }: FoldingBlockProps) {
  const [folded, setFolded] = useState(true);
  return (
    <div className="before:content-[' '] relative w-full bg-basic-0 before:absolute before:left-[8px] before:top-0 before:h-[1.5px] before:w-[calc(100%_-_16px)] before:bg-basic-3">
      <div
        className="flex items-center justify-between px-4 py-4 text-b2_m text-text-3"
        onClick={() => setFolded(!folded)}
      >
        {title}
        <SchevronLogo
          className={`h-3 text-text-2 ${
            folded ? "rotate-180" : "rotate-0"
          } transition-all`}
        ></SchevronLogo>
      </div>
      <div
        className={`${
          folded ? "max-h-0" : "max-h-96"
        } overflow-hidden px-4 text-text-1 transition-all`}
      >
        {children}
      </div>
    </div>
  );
}
