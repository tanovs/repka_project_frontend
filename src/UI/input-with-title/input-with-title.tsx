import { useRef, useState } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { ReactComponent as CrossIcon } from "../../assets/icons/cross-background.svg";

export type InputWithTitleProps = {
  label: string;
  registerInputFoo?: UseFormRegisterReturn<string>;
  error?: FieldError;
  onChange?: (input: string) => void;
  className?: string;
  id?: string;
};

export default function InputWithTitle({
  onChange,
  label,
  error,
  registerInputFoo,
  className,
  id,
}: InputWithTitleProps) {
  const [inputValue, setInputValue] = useState("");
  const changeInput = (value: string) => {
    setInputValue(value);
    onChange && onChange(value);
  };
  const [focus, setFocus] = useState(false);

  return (
    <div
      className={`group relative flex h-12 w-full items-center rounded-2xl border ${
        error && "border-extra-1 text-extra-1"
      } border-basic-3 focus-within:border-cta-button focus-within:text-cta-button ${
        className || ""
      }`}
    >
      <label className="invisible absolute -top-[0.6rem] left-4 bg-basic-0 px-1 text-b4_m group-focus-within:visible">
        {label}
      </label>
      <input
        id={id}
        key={id}
        autoCorrect="true"
        spellCheck="true"
        onFocus={() => setFocus(true)}
        onBlurCapture={(e) => setFocus(false)}
        // onChange={(e: ChangeEvent<HTMLInputElement>) =>
        //   changeInput(e.target.value)
        // }
        className={`m-3 w-full ${
          error && !focus && "placeholder-extra-1"
        } bg-inherit text-b2_m text-text-2 placeholder-shown:text-text-0 invalid:text-extra-1 focus-visible:text-text-2 focus-visible:outline-none`}
        type="text"
        placeholder={label}
        {...registerInputFoo}
        onChange={(e) => changeInput(e.target.value)}
        value={inputValue}
      />
      {inputValue && focus && (
        <div onClick={() => changeInput("")} className="mr-3 cursor-pointer">
          <CrossIcon className="text-text-3" />
        </div>
      )}
    </div>
  );
}
