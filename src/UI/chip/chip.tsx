import { useState } from "react";
import classes from "./increment-button.module.css";

export type ChipProps = {
  state: "primary" | "secondary" | "disabled" | "outline";
  onClick?: () => void;
  text: string;
};

export default function Chip({ state, text, onClick }: ChipProps) {
  let bgColor;
  let textColor;
  switch (state) {
    case "primary":
      bgColor = "bg-cta-button";
      textColor = "text-basic-0";
      break;
    case "secondary":
      bgColor = "bg-basic-2";
      textColor = "text-text-3";
      break;
    case "disabled":
      bgColor = "bg-basic-1";
      textColor = "text-text-1";
      break;
    case "outline":
      bgColor = "bg-basic-0";
      textColor = "text-cta-button";
      break;
    default:
      break;
  }

  return (
    <div
      className={`mx-1 inline-flex h-8 w-fit cursor-pointer items-center justify-center whitespace-nowrap rounded-2xl px-3 py-2 text-b3_m ${bgColor} ${textColor} ${
        state === "outline" ? "border border-cta-button" : "border-none"
      }`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}
