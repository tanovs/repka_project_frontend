import { ButtonIcon } from "../../UI/button-icon/button-icon";
import ImageSlider, {
  ImageSliderProps,
} from "./components/image-slider/image-slider";
import SupplierLabel from "../../UI/supplier-label/supplier-label";
import { ReactComponent as CrossIcon } from "../../assets/icons/cross.svg";
import { ReactComponent as ClockIcon } from "../../assets/icons/clock.svg";
import { ReactComponent as RubleIcon } from "../../assets/icons/ruble.svg";
import Chip from "../../UI/chip/chip";
import FoldingBlock from "../../UI/folding-block/folding-block";
import { ReadonlyField } from "../../UI/readonly-field/readonly-field";
import WideButton from "../../UI/wide-button/wide-button";
import Checkbox from "../../UI/checkbox/checkbox";
import OrderFixedButton from "../../components/order-fixed-button";

export default function ProductData() {
  const sliderProps: ImageSliderProps = {
    imageSrc: [
      "/src/assets/images/vegetables-1.jpeg",
      "/src/assets/images/vegetables-2.jpeg",
      "/src/assets/images/vegetables-3.jpeg",
    ],
  };

  return (
    <div className="mb-40 overflow-hidden rounded-2xl text-start shadow-upper-xl">
      <div className="relative mb-3">
        <div className="absolute z-[1] flex w-full items-center justify-between px-4 pt-4">
          <SupplierLabel
            logoSrc={"/src/assets/images/supplier-logo-1.png"}
            supplierId=""
            supplierName={"Karelia_Vegetarian"}
            transparent
          />
          <ButtonIcon hasBackground backgroundColor="dark">
            <CrossIcon className="text-basic-0" />
          </ButtonIcon>
        </div>
        <ImageSlider {...sliderProps} />
      </div>
      <div className="mb-6 px-3">
        <div className="mb-3">
          <Chip state="outline" text="Остаток: 200 шт." />
        </div>
        <div className="w-full text-h2_m text-text-3">
          Молоко коровье 5% пастеризованное
        </div>
        <div className="w-full text-h2_m text-text-1">500 мл</div>
      </div>
      <FoldingBlock title="О товаре">
        <ReadonlyField label="КБЖУ на 100 грамм">
          <div className="mr-5 flex flex-col items-center">
            <div className="text-b1_m text-text-3">4,7</div>
            <div className="text-b4_m text-text-3">углеводы</div>
          </div>
          <div className="mr-5 flex flex-col items-center">
            <div className="text-b1_m text-text-3">3</div>
            <div className="text-b4_m text-text-3">белки</div>
          </div>
          <div className="mr-5 flex flex-col items-center">
            <div className="text-b1_m text-text-3">2.5</div>
            <div className="text-b4_m text-text-3">жиры</div>
          </div>
          <div className="mr-5 flex flex-col items-center">
            <div className="text-b1_m text-text-3">53</div>
            <div className="text-b4_m text-text-3">ккал</div>
          </div>
        </ReadonlyField>
        <ReadonlyField label="Состав">
          Молоко цельное нормализованное
        </ReadonlyField>
        <ReadonlyField label="Срок годности, условия хранения">
          15 дней, от + 2 °С до +6 °С
        </ReadonlyField>
        <ReadonlyField label="Фасовка">по 500 мл</ReadonlyField>
        <ReadonlyField label="Бренд, Производитель">
          Весёлый молочник, Балтийское молоко филиал АО “ВБД”, Российская
          Федерация
        </ReadonlyField>
      </FoldingBlock>
      <FoldingBlock title="О доставке">
        <ReadonlyField label="Куда доставляют">
          <div className="flex h-auto items-center overflow-x-auto">
            <Chip text="Москва" state="outline" />
            <Chip text="Санкт-Петербург" state="outline" />
            <Chip text="Новосибирск" state="outline" />
            <Chip text="Усть-Каменск" state="outline" />
          </div>
        </ReadonlyField>
        <ReadonlyField label="Когда доставляют" iconContainer={<ClockIcon />}>
          Понедельник – пятница с 5 до 11 утра
        </ReadonlyField>
        <ReadonlyField
          label="Минимальная цена заказа"
          iconContainer={<RubleIcon />}
        >
          от 5000 рублей
        </ReadonlyField>
        <ReadonlyField label="Срок доставки" iconContainer={<ClockIcon />}>
          1 – 2 дня
        </ReadonlyField>
      </FoldingBlock>
      <OrderFixedButton
        bottomText="Заказы принимаются с 10 утра до 7 вечера пн-пт"
        buttonPrimaryText="58 ₽"
        buttonSecondaryText="Добавить в  заказ"
        checkboxText="Заказать как образец"
        onClick={() => {}}
        buttonColor="secondary"
      />
    </div>
  );
}
