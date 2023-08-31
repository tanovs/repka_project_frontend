import Select, { DropdownIndicatorProps, components } from "react-select";
import { InputWithTitleProps } from "../input-with-title/input-with-title";
import { ReactComponent as ArrowsUpDown } from "../../assets/icons/arrows-up-down.svg";
import { useState } from "react";

type RepkaSelectOption = {
  value: string;
  label: string;
};
export type RepkaSelectProps = InputWithTitleProps & {
  options: RepkaSelectOption[];
};

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <ArrowsUpDown />
    </components.DropdownIndicator>
  );
};

export default function RepkaSelect({
  onChange,
  label,
  error,
  registerInputFoo,
  className,
  id,
  options,
}: RepkaSelectProps) {
  // const [inputValue, setInputValue] = useState();
  const changeInput = (value: string) => {
    // setInputValue(value);
    onChange && onChange(value);
  };

  return (
    <div
      className={`group relative flex h-auto w-full items-center rounded-2xl border ${
        error && "border-extra-1 text-extra-1"
      } border-basic-3 focus-within:border-cta-button focus-within:text-cta-button ${
        className || ""
      }`}
    >
      <label className="invisible absolute -top-[0.6rem] left-4 bg-basic-0 px-1 text-b4_m group-focus-within:visible">
        {label}
      </label>
      <Select
        className={`mx-3 my-1 h-auto w-full ${
          error && "placeholder-extra-1"
        } bg-inherit text-b2_m text-text-0 focus-visible:text-text-2 focus-visible:outline-none`}
        unstyled
        classNames={{
          control: (state) =>
            `${state.isFocused ? "border-extra-1" : "border-extra-2"}`,
          group: () => "bg-extra-1",
          option: () =>
            "border-b-[1px] text-text-b2_m border-basic-3 text-text-3 py-3 px-6 last:border-0",
          menuList: () => "bg-basic-0 rounded-2xl shadow-upper",
          noOptionsMessage: () => "px-2 py-6",
          multiValue: () =>
            "px-3 py-1 rounded-2xl bg-basic-2 mr-1 my-1 text-text-3 text-text-b4_m",
          multiValueRemove: () => "text-text-0",
          dropdownIndicator: () => "ml-1",
        }}
        options={options}
        id={id}
        key={id}
        isMulti
        // onChange={(e: ChangeEvent<HTMLInputElement>) =>
        //   changeInput(e.target.value)
        // }
        components={{ DropdownIndicator }}
        placeholder={label}
        {...registerInputFoo}
        onChange={(e) => changeInput(e?.toString() || "")}
        // value={inputValue}
      />
    </div>
  );
}
