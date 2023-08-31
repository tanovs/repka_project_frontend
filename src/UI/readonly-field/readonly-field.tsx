import { useNavigate } from "react-router-dom";
import { ButtonIcon } from "../../UI/button-icon/button-icon";
import SmallGoodsCard from "../../UI/small-goods-card/small-goods-card";
import { SmallGoodsCardProps } from "../../UI/small-goods-card/small-goods-card";
import { ReactComponent as ChevronIcon } from "../../assets/icons/schevron.svg";
import { ReactComponentElement } from "react";

export type ReadonlyFieldProps = {
  label: string;
  children: React.ReactNode;
  iconContainer?: React.ReactNode;
};

export function ReadonlyField({
  label,
  children,
  iconContainer,
}: ReadonlyFieldProps) {
  return (
    <div className="mb-5 text-start">
      <div className="mb-1 w-full text-b3_m text-text-0">{label}</div>
      <div className="flex items-center text-b2_m text-text-3">
        {iconContainer && (
          <div className="mr-2 flex h-4 w-4 items-center justify-center text-text-0">
            {iconContainer}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
