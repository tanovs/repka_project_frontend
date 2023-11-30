import { GoodBase } from "./good.model";

export type SupplierBase = {
  id: string;
  company_name: string;
  estimated_delivery_time: string;
  min_price: string;
};

export type SupplierWithGoods = {
  supplier_id: string;
  company_name: string;
  goods: GoodBase[];
};
