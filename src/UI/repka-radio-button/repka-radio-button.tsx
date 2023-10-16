import classes from "./repka-radio-button.module.css";

export type RepkaRadioButtonProps = {
  label: string;
  groupName: string;
  className?: string;
  valueChanges: () => void;
};

export function RepkaRadioButton({
  label,
  groupName,
  className = "",
  valueChanges,
}: RepkaRadioButtonProps) {
  const inputId = `radio-${Math.random()}`;
  return (
    <div className={className}>
      <input
        className={`${classes.radioInput}`}
        id={inputId}
        type="radio"
        name={groupName}
        onChange={valueChanges}
      />
      <label htmlFor={inputId} className={`${classes.radioLabel}`}>
        {label}
      </label>
    </div>
  );
}
