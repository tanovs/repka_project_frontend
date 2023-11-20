import { useState } from "react";
export type WideButtonProps = {
  color?: "primary" | "secondary";
  primaryText: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  secondaryText?: string;
  className?: string;
  small?: boolean;
  onClick?: () => void;
};

export default function WideButton({
  color,
  type,
  primaryText,
  secondaryText,
  className,
  small,
  onClick,
}: WideButtonProps) {
  const currentBgColor = getButtonColor(color);
  const currentTextColor = color === "primary" ? "text-basic-1" : "text-text-1";
  const justify = secondaryText ? "justify-between" : "justify-center";
  const textClass = small ? "text-b3_m" : "text-b1_m";

  return (
    <button
      className={`${className} flex w-full ${
        currentBgColor || ""
      } ${justify} ${currentTextColor} rounded-2xl px-3 py-3`}
      onClick={onClick}
      type={type}
    >
      <div className={textClass}>{primaryText}</div>
      {secondaryText && <div className={textClass}>{secondaryText}</div>}
    </button>
  );
}

const getButtonColor = (color: WideButtonProps["color"]) => {
  switch (color) {
    case "primary":
      return "bg-cta-button";
    case "secondary":
      return "bg-basic-2";
    default:
      return undefined;
  }
};
