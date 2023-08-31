import { ButtonIcon } from "../../UI/button-icon/button-icon";
import Checkbox from "../../UI/checkbox/checkbox";
import Chip from "../../UI/chip/chip";
import { ReactComponent as SchevronIcon } from "../../assets/icons/schevron.svg";

export type MainFiltersProps = {
  visible: boolean;
  setVisibility: (isVisible: boolean) => void;
};

export default function MainFilters({
  visible,
  setVisibility,
}: MainFiltersProps) {
  return (
    <div
      className={`absolute top-0 z-[2] h-[100vh] w-full bg-basic-1 text-start transition-all ${
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
          <Chip state="primary" text="Санкт-Петербург"></Chip>
          <Chip state="secondary" text="Новосибирск"></Chip>
        </div>
        <div className="mb-4 mt-7 text-h2_m text-text-3">
          По области доставки
        </div>
        <div className="leading-10">
          <Chip state="secondary" text="Ленинградская область"></Chip>
          <Chip state="primary" text="Московская область"></Chip>
          <Chip state="secondary" text="Свердловская область"></Chip>
          <Chip state="secondary" text="Новосибирская область"></Chip>
          <Chip state="secondary" text="Саратовская область"></Chip>
        </div>
      </div>
      <div className="my-3 w-full rounded-2xl bg-basic-0 p-5">
        <div className="mb-4 mt-2 text-h2_m text-text-3">Показать сначала</div>
        <div>
          <Checkbox checked={true} text="По умолчанию" onChange={() => {}} />
          <Checkbox
            checked={false}
            text="От самой низкой цены"
            onChange={() => {}}
          />
          <Checkbox
            checked={false}
            text="От самой высокой цены"
            onChange={() => {}}
          />
          <Checkbox checked={false} text="С рейтингом" onChange={() => {}} />
        </div>
      </div>
    </div>
  );
}
