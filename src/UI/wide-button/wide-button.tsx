import { useState } from "react";
export type WideButtonProps = {
  color: "primary" | "secondary";
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
  const currentBgColor = color === "primary" ? "bg-cta-button" : "bg-basic-2";
  const currentTextColor = color === "primary" ? "text-basic-1" : "text-text-1";
  const justify = secondaryText ? "justify-between" : "justify-center";
  const textClass = small ? "text-b3_m" : "text-b1_m";

  return (
    <button
      className={`${className} flex ${currentBgColor} ${justify} ${currentTextColor} rounded-2xl px-3 py-3`}
      onClick={onClick}
      type={type}
    >
      <div className={textClass}>{primaryText}</div>
      {secondaryText && <div className={textClass}>{secondaryText}</div>}
    </button>
  );
}
