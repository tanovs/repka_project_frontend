import { ButtonIcon } from "@/UI/button-icon/button-icon";
import Chip from "@/UI/chip/chip";
import FoldingBlock from "@/UI/folding-block/folding-block";
import { ReadonlyField } from "@/UI/readonly-field/readonly-field";
import SupplierLabel from "@/UI/supplier-label/supplier-label";
import OrderFixedButton from "@/components/order-fixed-button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageSlider, {
  ImageSliderProps,
} from "./components/image-slider/image-slider";
import { GoodFull } from "@/shared/models/good.model";
import { ReactComponent as ClockIcon } from "@assets/icons/clock.svg";
import { ReactComponent as RubleIcon } from "@assets/icons/ruble.svg";
import { ReactComponent as CrossIcon } from "@assets/icons/cross.svg";

export type ProductDataDisplayProps = {
  id: string;
  productData: GoodFull;
  productPicUrl?: string;
};

export default function ProductDataDisplay({
  id,
  productData,
  productPicUrl,
}: ProductDataDisplayProps) {
  const navigate = useNavigate();
  const [productInCartAmount, setProductInCartAmount] = useState(1);
  const sliderProps: ImageSliderProps = {
    imageSrc: productPicUrl ? [productPicUrl] : [],
    width: "10px",
  };

  return (
    <>
      <div className="h-full overflow-auto rounded-2xl text-start shadow-upper-xl">
        <div className="relative mb-3 min-h-[4rem]">
          <div className="absolute z-[1] flex w-full items-center justify-between px-4 pt-4">
            <SupplierLabel
              logoSrc={"/src/assets/images/supplier-logo-1.png"}
              supplierId="1"
              supplierName={"Karelia_Vegetarian"}
              transparent
            />
            <ButtonIcon
              hasBackground
              backgroundColor="dark"
              onClick={() => navigate(-1)}
            >
              <CrossIcon className="text-basic-0" />
            </ButtonIcon>
          </div>
          {productPicUrl && <ImageSlider {...sliderProps} />}
        </div>
        <div className="mb-6 px-3">
          {productData.balance && (
            <div className="mb-3">
              <Chip state="outline" text={productData.balance} />
            </div>
          )}
          <div className="w-full text-h2_m text-text-3">{productData.name}</div>
          {productData.volume && (
            <div className="w-full text-h2_m text-text-1">
              {productData.volume}
            </div>
          )}
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
            {productData.calories && (
              <div className="mr-5 flex flex-col items-center">
                <div className="text-b1_m text-text-3">
                  {productData.calories}
                </div>
                <div className="text-b4_m text-text-3">ккал</div>
              </div>
            )}
          </ReadonlyField>
          {productData.compound && (
            <ReadonlyField label="Состав">{productData.compound}</ReadonlyField>
          )}
          {productData.expiration_day && (
            <ReadonlyField label="Срок годности, условия хранения">
              {productData.expiration_day}
            </ReadonlyField>
          )}
          {productData.volume && (
            <ReadonlyField label="Фасовка">{productData.volume}</ReadonlyField>
          )}
          {productData.producer && (
            <ReadonlyField label="Бренд, Производитель">
              {productData.producer}
            </ReadonlyField>
          )}
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
      </div>

      {/* <OrderFixedButton
        bottomText="Заказы принимаются с 10 утра до 7 вечера пн-пт"
        buttonPrimaryText="58 ₽"
        buttonSecondaryText={
          productInCartAmount ? "Корзина" : "Добавить в заказ"
        }
        checkboxText="Заказать как образец"
        onClick={() => {
          if (productInCartAmount) {
            navigate("../cart");
            return;
          }
          setProductInCartAmount(1);
        }}
        buttonColor="primary"
        orderAmount={productInCartAmount}
        onQuantityChange={(_, currentAmount) => {
          setProductInCartAmount(currentAmount);
        }}
      /> */}
    </>
  );
}
