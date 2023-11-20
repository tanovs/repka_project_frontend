import { ReactComponent as ThrashIcon } from "../../../../assets/icons/thrash.svg";
import { ButtonIcon } from "../../../../UI/button-icon/button-icon";
import { useState } from "react";
import CartItemProduct, {
  CartItemProductProps,
} from "../../../../components/cart-item-product";
import WideButton from "../../../../UI/wide-button/wide-button";
import SupplierLabel from "../../../../UI/supplier-label/supplier-label";
import { useNavigate } from "react-router-dom";

export type CartOrderProps = {
  orderTitle: string;
  orderAmount: string;
  orderGoods: CartItemProductProps[];
};

export function CartOrder({
  orderTitle,
  orderAmount,
  orderGoods,
}: CartOrderProps) {
  const [folded, setFolded] = useState(true);
  const navigate = useNavigate();

  const products = orderGoods.map((product, indx) => (
    <CartItemProduct key={indx} {...product} />
  ));

  return (
    <div className="w-full rounded-2xl bg-basic-0 p-3">
      <div onClick={() => setFolded(!folded)}>
        <div className="mb-5 flex items-center justify-between">
          <SupplierLabel
            supplierName="Karelia_Vegetarian"
            supplierId="1"
            logoSrc="/src/assets/images/supplier-logo-1.png"
            small
          />
          <ButtonIcon hasBackground={false}>
            <ThrashIcon />
          </ButtonIcon>
        </div>
        <div className="flex items-center justify-between text-b1_m">
          <div>{orderTitle}</div>
          <div>{orderAmount}</div>
        </div>
      </div>
      <div
        className={`${
          folded ? "max-h-0" : "max-h-full"
        } overflow-hidden text-text-1 transition-all`}
      >
        {products}
        <div className="mt-6 px-4">
          <WideButton
            color="primary"
            primaryText={`${orderAmount} ₽`}
            secondaryText="Оформить заказ"
            onClick={() => navigate("checkout")}
          />
        </div>
        <div className="mt-1 text-center text-b3_m text-text-3">
          Приём заказов — с 10 утра до 7 вечера пн-пт
        </div>
      </div>
    </div>
  );
}
