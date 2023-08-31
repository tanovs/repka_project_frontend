import { ChangeEvent, useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as CrossBackground } from "../../assets/icons/cross-background.svg";

export type SearchInputProps = {
  onChange: (input: string) => void;
  onFocus: () => void;
};

export default function SearchInput({ onChange, onFocus }: SearchInputProps) {
  const [inputValue, setInputValue] = useState("");
  const changeInput = (value: string) => {
    setInputValue(value);
    onChange(value);
  };

  return (
    <div className="flex h-11 w-full items-center justify-center">
      <div className="peer flex h-8 w-full items-center rounded-full bg-basic-2 px-3  text-text-0 transition-all focus-within:h-11 focus-within:text-text-2">
        <SearchIcon />
        <input
          autoCorrect="true"
          spellCheck="true"
          onFocusCapture={onFocus}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            changeInput(e.target.value)
          }
          className="ml-3 mr-3 w-full bg-basic-2 text-b3_m text-text-0 focus-visible:text-text-2 focus-visible:outline-none"
          type="text"
          placeholder="Search"
          value={inputValue}
        />
        {inputValue && (
          <div onClick={() => changeInput("")} className="cursor-pointer">
            <CrossBackground />
          </div>
        )}
      </div>
    </div>
  );
}
