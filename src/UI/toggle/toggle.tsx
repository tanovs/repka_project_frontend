import { useRef, useState } from "react";
import { CheckboxProps } from "../checkbox/checkbox";

export default function Toggle({
  checked,
  text,
  onChange,
  disabled,
  className,
}: CheckboxProps) {
  const [checkboxState, setCheckboxState] = useState(checked);

  function onValueChange(): void {
    onChange(!checkboxState);
    setCheckboxState(!checkboxState);
  }

  return (
    <label
      className={`relative inline-flex cursor-pointer items-center ${className}`}
    >
      <input
        disabled={disabled}
        onChange={onValueChange}
        defaultChecked={checkboxState}
        type="checkbox"
        className="peer sr-only"
      />
      <div className="peer-checked:after:border-white after:bg-white peer relative min-h-[1.25rem] min-w-[2.25rem] rounded-full bg-basic-3 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-basic-0 after:transition-all after:content-[''] peer-checked:bg-cta-button peer-checked:after:translate-x-full dark:bg-basic-3 dark:peer-focus:bg-basic-3"></div>
      <span className="ml-2 text-b3_m text-text-1 peer-disabled:text-text-0">
        {text}
      </span>
    </label>
  );
}
