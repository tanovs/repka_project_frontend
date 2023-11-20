import { useRef, useState } from "react";

export type CheckboxProps = {
  text: string;
  onChange: (checked: boolean) => void;
  checked?: boolean;
  disabled?: boolean;
  className?: string;
};

export default function Checkbox({
  checked,
  text,
  onChange,
  className,
}: CheckboxProps) {
  const checkboxState = useRef(checked);

  function onValueChange(): void {
    checkboxState.current = !checkboxState.current;
    onChange(checkboxState.current);
  }

  return (
    <label
      onClick={onValueChange}
      className={`${
        className || ""
      } my-2 flex items-center text-b2_m text-text-3`}
    >
      <input
        onChange={onValueChange}
        defaultChecked={checkboxState.current}
        // onChange={(e) => console.log(e)}
        className="mr-2 h-5 w-5 rounded accent-cta-button"
        type="checkbox"
      />
      {text}
    </label>
  );
}
