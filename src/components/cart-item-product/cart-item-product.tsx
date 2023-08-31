import { Outlet, createSearchParams, useNavigate } from "react-router-dom";
import { ReactComponent as ThrashIcon } from "../../../assets/icons/thrash.svg";
import { ButtonIcon } from "../../UI/button-icon/button-icon";
import { useState } from "react";
import IncrementButton from "../../UI/increment-button/increment-button";

export type CartItemProductProps = {
  title: string;
  price: string;
  imageUrl: string;
  weight: string;
  amount: number;
  readonly?: boolean;
  onAmountChange: (newAmount: number) => void;
};

export function CartItemProduct({
  title,
  price,
  weight,
  imageUrl,
  amount,
  readonly,
  onAmountChange,
}: CartItemProductProps) {
  const navigate = useNavigate();

  return (
    <div
      className="my-3 flex h-20 w-full flex-nowrap items-center text-start"
      onClick={() => navigate("/product")}
    >
      <div
        style={{ backgroundImage: `url('${imageUrl}')` }}
        className="relative mr-2 h-full min-w-[4rem] rounded-2xl bg-cover bg-center bg-no-repeat"
      ></div>
      <div className="flex h-full w-full flex-col justify-between">
        <div className="text-b3_m text-text-3">{title}</div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-text-3">{price} ₽</span>
            <span className="text-text-1"> • {weight}</span>
            {readonly && <span className="text-text-1"> • {amount} шт</span>}
          </div>
          {!readonly && (
            <IncrementButton
              color="secondary"
              isSmall
              initialCount={amount}
              incrementFoo={(isIncrement, amount) => onAmountChange(amount)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
