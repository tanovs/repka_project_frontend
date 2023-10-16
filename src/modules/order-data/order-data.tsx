import { useNavigate } from "react-router-dom";
import { HeaderWithButtons } from "../../UI/header-with-back-button/header-with-back-button";
import { CartOrder } from "../cart/components/cart-order/cart-order";
import CartItemProduct, {
  CartItemProductProps,
} from "../../components/cart-item-product";
import SupplierLabel from "../../UI/supplier-label/supplier-label";
import ChipsWrapped from "../../UI/chips-wrapped/chips-wrapped";
import Chip from "../../UI/chip/chip";
import { NotificationBlock } from "../../UI/notification-block/notification-block";

export default function OrderData() {
  const navigate = useNavigate();
  const orderedGood: CartItemProductProps = {
    amount: 20,
    imageUrl: "../src/assets/images/vegetables-1.jpeg",
    onAmountChange: (newAmount) => console.log(newAmount),
    price: "58",
    title: "Молоко коровье 5% пастеризованное",
    weight: "500 мл",
  };
  const supplierShippingTimeWarning =
    "Поставщик может изменить финальную цену и срок доставки в зависимости от выбранного города и региона.";

  return (
    <div className="[&>*]:mb-3 last:[&>*]:m-0">
      <div className="rounded-2xl bg-basic-0 pb-5 shadow-upper">
        <HeaderWithButtons
          title="Данные заказа"
          onLeftButtonClick={() => navigate("./cart")}
        />
        <div className="mt-5 px-5">
          <SupplierLabel
            supplierId="1"
            supplierName="Karelia Vegetarian"
            logoSrc="../src/assets/images/supplier-logo.png"
            small
          />
          <CartItemProduct {...orderedGood} readonly />
          <div className="mt-6 flex justify-between">
            <div className="text-b1_m text-text-3">Итоговая сумма</div>
            <div className="text-b1_m text-text-3">1 160 ₽</div>
          </div>
          <NotificationBlock
            className="mt-2"
            color="accent"
            text={supplierShippingTimeWarning}
          />
        </div>
      </div>
      <div className="rounded-2xl bg-basic-0 p-5 [&>*]:mb-3">
        <div className="text-b1_m text-text-3">Адрес и время</div>
        <div className="text-b3_m text-text-3">Люди и кофе</div>
        <div className="text-b3_m text-text-3">Ул. 1-ая Советская, 28 к1</div>
        <div className="text-b3_m text-text-3">
          Поднять заказ на третий этаж по лестнице, так как нет лифта, готовы
          дополнительно доплатить за подъём товара
        </div>
        <div className="text-b3_m text-text-3">28.03.2023</div>
        <ChipsWrapped>
          <Chip state="secondary" text="ПТ" />
          <Chip state="secondary" text="9:00 – 10:00" />
        </ChipsWrapped>
      </div>
      <div className="rounded-2xl bg-basic-0 p-5 [&>*]:mb-3">
        <div className="text-b1_m text-text-3">Кто примет поставку</div>
        <div className="text-b3_m text-text-3">Анастасия</div>
        <div className="text-b3_m text-text-3">+7 (952) 215-03-21</div>
      </div>
      <div className="rounded-2xl bg-basic-0 p-5 [&>*]:mb-3">
        <div className="text-b1_m text-text-3">Документы и оплата</div>
        <div className="text-b3_m text-text-3">Оплата как физическое лицо</div>
      </div>
    </div>
  );
}
