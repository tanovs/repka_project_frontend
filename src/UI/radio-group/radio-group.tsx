import { RepkaRadioButton } from "../repka-radio-button/repka-radio-button";

export type RadioGroupProps = {
  groupName: string;
  options: { id: string; label: string }[];
  className?: string;
  onOptionChosen: (id: string) => void;
};

export function RadioGroup({
  groupName,
  options,
  className = "",
  onOptionChosen,
}: RadioGroupProps) {
  return (
    <div className={`${className} flex flex-col gap-4`}>
      {options.map((option, indx) => (
        <RepkaRadioButton
          groupName={groupName}
          label={option.label}
          key={indx}
          valueChanges={() => onOptionChosen(option.id)}
        />
      ))}
    </div>
  );
}
