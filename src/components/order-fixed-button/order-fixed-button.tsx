import { useRef } from "react";
import Checkbox from "../../UI/checkbox/checkbox";
import WideButton, { WideButtonProps } from "../../UI/wide-button/wide-button";
import IncrementButton, {
  IncrementButtonProps,
} from "../../UI/increment-button/increment-button";

export type OrderFixedButtonProps = {
  bottomText: string;
  checkboxText?: string;
  buttonPrimaryText: string;
  buttonSecondaryText: string;
  buttonColor: WideButtonProps["color"];
  orderAmount?: number;
  onClick: (checked: boolean) => void;
  onQuantityChange?: IncrementButtonProps["incrementFoo"];
};
export default function OrderFixedButton({
  bottomText,
  buttonColor,
  checkboxText,
  orderAmount,
  buttonPrimaryText,
  buttonSecondaryText,
  onClick,
  onQuantityChange,
}: OrderFixedButtonProps) {
  const checked = useRef(false);

  return (
    <div className="sticky bottom-0 w-full rounded-t-2xl bg-basic-0 px-5 py-4 shadow-upper">
      {checkboxText && (
        <Checkbox
          checked={checked.current}
          onChange={(isChecked) => {
            checked.current = isChecked;
          }}
          text={checkboxText}
        />
      )}
      {orderAmount && onQuantityChange ? (
        <div className="flex items-stretch">
          <WideButton
            className="mr-2"
            color="primary"
            primaryText={buttonPrimaryText}
            secondaryText={buttonSecondaryText}
            onClick={() => onClick(checked.current)}
          />
          <IncrementButton
            color="primary"
            incrementFoo={onQuantityChange}
            initialCount={orderAmount}
          />
        </div>
      ) : (
        <div>
          <WideButton
            color={buttonColor}
            primaryText={buttonPrimaryText}
            secondaryText={buttonSecondaryText}
            onClick={() => onClick(checked.current)}
          />
        </div>
      )}
      <div className="mt-1 text-b3_m">{bottomText}</div>
    </div>
  );
}
