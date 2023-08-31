import { CartOrder, CartOrderProps } from "./cart-order/cart-order";
import { HeaderWithButtons } from "../../../UI/header-with-back-button/header-with-back-button";

export function Cart() {
  const ordersTemplate = (orderProps: CartOrderProps, key: number) => (
    <div className="my-2" key={key}>
      <CartOrder {...orderProps} />
    </div>
  );
  const orders = Array(3)
    .fill(undefined)
    .map((_, indx) => {
      const order: CartOrderProps = {
        orderAmount: "2069",
        orderTitle: `Заказ №${indx + 1}`,
        orderGoods: [
          {
            amount: 20,
            imageUrl: "../src/assets/images/vegetables-1.jpeg",
            onAmountChange: (newAmount) => console.log(newAmount),
            price: "58",
            title: "Молоко коровье 5% пастеризованное",
            weight: "500 мл",
          },
          {
            amount: 5,
            imageUrl: "../src/assets/images/vegetables-2.jpeg",
            onAmountChange: (newAmount) => console.log(newAmount),
            price: "200",
            title: "Сыр горгонзола",
            weight: "200 г",
          },
        ],
      };
      return ordersTemplate(order, indx);
    });

  return (
    <div className="w-full rounded-t-2xl bg-basic-1 shadow-upper">
      <HeaderWithButtons title="Корзина" onLeftButtonClick={() => {}} />
      {orders}
    </div>
  );
}
