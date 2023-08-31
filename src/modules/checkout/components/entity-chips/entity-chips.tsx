import { ReactElement, useState } from "react";
import Chip, { ChipProps } from "../../../../UI/chip/chip";
import ChipsWrapped from "../../../../UI/chips-wrapped/chips-wrapped";

export type EntityChipsAreaProps = {
  entities: { id: string; name: string }[];
};

export default function EntityChipsArea({ entities }: EntityChipsAreaProps) {
  const weekDaysChips: Array<ReactElement<ChipProps>> = entities.map(
    (entity, indx) => {
      const [chipState, setChipState] =
        useState<ChipProps["state"]>("secondary");
      const chip = (
        <Chip
          key={entity.id}
          text={entity.name}
          state={chipState}
          onClick={() =>
            setChipState(chipState === "secondary" ? "primary" : "secondary")
          }
        />
      );
      return chip;
    }
  );

  return <ChipsWrapped>{weekDaysChips}</ChipsWrapped>;
}
