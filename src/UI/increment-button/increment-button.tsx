import { useState } from "react";
import classes from "./increment-button.module.css";

export type IncrementButtonProps = {
  color: "primary" | "secondary";
  isSmall?: boolean;
  initialCount?: number;
  incrementFoo: (isIncrement: boolean, currentCount: number) => void;
};

export default function IncrementButton({
  color,
  initialCount = 1,
  incrementFoo,
  isSmall,
}: IncrementButtonProps) {
  const [count, setCount] = useState(initialCount);

  const bgColor = color === "primary" ? "bg-cta-button" : "bg-basic-2";
  const textColor = color === "primary" ? "text-basic-0" : "text-text-1";
  const buttonsTextColor = color === "primary" ? "text-basic-2" : "text-text-1";
  const changeCount = (isIncrement: boolean) => {
    const newCount = isIncrement ? count + 1 : count === 0 ? 0 : count - 1;
    incrementFoo(isIncrement, newCount);
    setCount(newCount);
  };

  return (
    <div
      className={`${
        classes.button_container
      } flex w-fit items-center justify-center ${bgColor} ${
        isSmall ? "h-8" : "h-12"
      } rounded-2xl`}
    >
      <button
        className={`h-8 w-8 bg-inherit p-0 text-b1_m ${buttonsTextColor}`}
        onClick={(e) => {
          e.stopPropagation();
          changeCount(false);
        }}
      >
        -
      </button>
      <div
        className={`flex items-center justify-center text-b1_m ${textColor}`}
      >
        {count}
      </div>
      <button
        className={`h-8 w-8 bg-inherit p-0 text-b1_m ${buttonsTextColor}`}
        onClick={(e) => {
          e.stopPropagation();
          changeCount(true);
        }}
      >
        +
      </button>
    </div>
  );
}
