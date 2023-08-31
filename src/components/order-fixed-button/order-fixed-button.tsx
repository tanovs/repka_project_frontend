import { useRef } from "react";
import Checkbox from "../../UI/checkbox/checkbox";
import WideButton, { WideButtonProps } from "../../UI/wide-button/wide-button";

export type OrderFixedButtonProps = {
  bottomText: string;
  checkboxText?: string;
  buttonPrimaryText: string;
  buttonSecondaryText: string;
  buttonColor: WideButtonProps["color"];
  onClick: (checked: boolean) => void;
};

export default function OrderFixedButton({
  bottomText,
  buttonColor,
  onClick,
  checkboxText,
  buttonPrimaryText,
  buttonSecondaryText,
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
      <WideButton
        color={buttonColor}
        primaryText={buttonPrimaryText}
        secondaryText={buttonSecondaryText}
        onClick={() => onClick(checked.current)}
      />
      <div className="text-b3_m">{bottomText}</div>
    </div>
  );
}
