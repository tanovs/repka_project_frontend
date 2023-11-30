import { useState } from "react";
import Chip, { ChipProps } from "../chip/chip";

export type ClickableChipProps = {
  text: string;
  initialState: "secondary" | "primary";
  stateChange: (enabled: boolean) => void;
};

export function ClickableChip({
  text,
  initialState,
  stateChange,
}: ClickableChipProps) {
  const [chipState, setChipState] = useState<ChipProps["state"]>(initialState);

  const onStateChange = () => {
    const toDisable = chipState === "primary";
    stateChange(!toDisable);
    setChipState(toDisable ? "secondary" : "primary");
  };

  return <Chip text={text} state={chipState} onClick={onStateChange} />;
}
