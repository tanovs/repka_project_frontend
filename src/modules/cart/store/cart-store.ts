import { makeAutoObservable } from "mobx";
import { SmallGoodsCardProps } from "../../../UI/small-goods-card/small-goods-card";

export type CartItem = {
  supplierId: string;
  sum: number;
  goods: CartProduct[];
};

export type CartProduct = {
  product: SmallGoodsCardProps;
  amount: number;
};

export default class CartStorage {
  constructor() {
    makeAutoObservable(this);
  }

  cart: CartItem[] = [];

  addItem(supplierId: string, product: SmallGoodsCardProps): void {
    const foundSupplier = this.cart.find(
      (cartItem) => cartItem.supplierId === supplierId,
    );
    if (!foundSupplier) {
      this.cart.push({
        sum: +product.price,
        goods: [
          {
            product,
            amount: 1,
          },
        ],
        supplierId: supplierId,
      });
      return;
    }

    const productToIncrease = foundSupplier.goods.find(
      (item) => item.product.id === product.id,
    );
    if (!productToIncrease) {
      foundSupplier.goods.push({
        amount: 1,
        product: product,
      });
      return;
    }
    productToIncrease.amount++;
  }

  deleteItem(supplierId: string, productToDelete: SmallGoodsCardProps): void {
    const foundCardItem = this.cart.find(
      (cartItem) => cartItem.supplierId === supplierId,
    );
    if (!foundCardItem) {
      return;
    }

    const productToDecrease = foundCardItem.goods.find(
      (good) => good.product.id === productToDelete.id,
    );
    if (!productToDecrease) {
      return;
    }
    productToDecrease.amount--;
    // if (productToDecrease.amount === 0) {
    // }
  }
}
