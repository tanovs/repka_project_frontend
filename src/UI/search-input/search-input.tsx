import { ChangeEvent, useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as CrossBackground } from "../../assets/icons/cross-background.svg";

export type SearchInputProps = {
  value: string;
  onChange: (input: string) => void;
  onFocusChange: (focus: boolean) => void;
};

export default function SearchInput({
  value,
  onChange,
  onFocusChange,
}: SearchInputProps) {
  return (
    <div className="flex h-11 w-full items-center justify-center">
      <div className="peer flex h-8 w-full items-center rounded-full bg-basic-2 px-3  text-text-0 transition-all focus-within:h-11 focus-within:text-text-2">
        <SearchIcon />
        <input
          autoCorrect="true"
          spellCheck="true"
          onFocusCapture={() => onFocusChange(true)}
          onBlurCapture={() => onFocusChange(false)}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
          className="ml-3 mr-3 w-full bg-basic-2 text-b3_m text-text-0 focus-visible:text-text-2 focus-visible:outline-none"
          type="text"
          placeholder="Search"
          value={value}
        />
        {value && (
          <div onClick={() => onChange("")} className="cursor-pointer">
            <CrossBackground />
          </div>
        )}
      </div>
    </div>
  );
}
