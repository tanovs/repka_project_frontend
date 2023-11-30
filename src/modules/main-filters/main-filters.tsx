import { useEffect } from "react";
import { ButtonIcon } from "../../UI/button-icon/button-icon";
import Checkbox from "../../UI/checkbox/checkbox";
import Chip from "../../UI/chip/chip";
import { RadioGroup, RadioGroupProps } from "../../UI/radio-group/radio-group";
import { RepkaRadioButton } from "../../UI/repka-radio-button/repka-radio-button";
import { ReactComponent as SchevronIcon } from "../../assets/icons/schevron.svg";

export type MainFiltersProps = {
  visible: boolean;
  setVisibility: (isVisible: boolean) => void;
};

export default function MainFilters({
  visible,
  setVisibility,
}: MainFiltersProps) {
  const radioFilterOptions: RadioGroupProps["options"] = [
    {
      id: "0",
      label: "По умолчанию",
    },
    {
      id: "1",
      label: "От самой низкой цены",
    },
    {
      id: "2",
      label: "От самой высокой цены",
    },
    {
      id: "3",
      label: "С рейтингом",
    },
  ];

  useEffect(() => {
    document.body.style.overflowY = visible ? "hidden" : "auto";
  }, [visible]);

  return (
    <div
      className={`fixed top-0 z-[2] h-screen w-full bg-basic-1 text-start transition-all ${
        visible ? "left-0" : "left-full"
      }`}
    >
      <div className="mb-3 flex items-center justify-between rounded-2xl bg-basic-0 p-5">
        <ButtonIcon hasBackground={true} onClick={() => setVisibility(false)}>
          <SchevronIcon className="h-5 rotate-90 text-text-0"></SchevronIcon>
        </ButtonIcon>
        <div className="text-b1_m text-text-3">Фильтры</div>
        <div className="h-8 w-8"></div>
      </div>
      <div className="my-3 w-full rounded-2xl bg-basic-0 p-5">
        <div className="mb-4 mt-2 text-h2_m text-text-3">
          По городу доставки
        </div>
        <div className="leading-10">
          <Chip state="secondary" text="Москва"></Chip>
          <Chip state="secondary" text="Санкт-Петербург"></Chip>
          <Chip state="secondary" text="Новосибирск"></Chip>
        </div>
        <div className="mb-4 mt-7 text-h2_m text-text-3">
          По области доставки
        </div>
        <div className="leading-10">
          <Chip state="secondary" text="Ленинградская область"></Chip>
          <Chip state="secondary" text="Московская область"></Chip>
          <Chip state="secondary" text="Свердловская область"></Chip>
          <Chip state="secondary" text="Новосибирская область"></Chip>
          <Chip state="secondary" text="Саратовская область"></Chip>
        </div>
      </div>
      <div className="my-3 w-full rounded-2xl bg-basic-0 p-5">
        <div className="mb-4 mt-2 text-h2_m text-text-3">Показать сначала</div>
        <div>
          <RadioGroup
            groupName="filters"
            options={radioFilterOptions}
            onOptionChosen={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
