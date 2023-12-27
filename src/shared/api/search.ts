import { SupplierBase, SupplierWithGoods } from "../models/supplier.model";
import { api } from "./core/config";
import { goodsBaseMock } from "./supplier";

type SearchParams = {
  category_id?: string[];
  tag_id?: string[];
  city_id?: string[];
  region_id?: string[];
};

export const searchByGoods = (params: SearchParams, query?: string) =>
  api
    .post<SupplierWithGoods[]>("good/search_with_params", params, {
      params: {
        like: query || "",
      },
    })
    // .then(() => ({ data: supplierGoods }))
    .catch(() => ({ data: supplierGoods }));

export const searchBySuppliers = (params: SearchParams, query: string) =>
  api.post<SupplierBase[]>("supplier/search_with_params", params, {
    params: {
      like: query,
    },
  });
// .then(() => ({ data: suppliersMock }));

const supplierGoods: SupplierWithGoods[] = [
  {
    supplier_id: "1",
    supplier_name: "Karelia_Vegetarian",
    goods: goodsBaseMock.slice(0, 3),
  },
  {
    supplier_id: "2",
    supplier_name: "Meat Seller",
    goods: goodsBaseMock.slice(0, 3),
  },
  {
    supplier_id: "3",
    supplier_name: "Chemicals Guy",
    goods: goodsBaseMock.slice(0, 3),
  },
];

const suppliersMock: SupplierBase[] = [
  {
    id: "1",
    company_name: "Karelia_Vegetarian",
    estimated_delivery_time: "1-2 дн.",
    min_price: "2000",
  },
  {
    id: "2",
    company_name: "Meat Seller",
    estimated_delivery_time: "1-2 дн.",
    min_price: "9000",
  },
  {
    id: "3",
    company_name: "Chemicals Guy",
    estimated_delivery_time: "4-5 дн.",
    min_price: "500",
  },
];
