import { SupplierBase, SupplierWithGoods } from "../models/supplier.model";
import { api } from "./core/config";

type SearchParams = {
  category_id: string[];
  tag_id: string[];
  city_id: string[];
  region_id: string[];
};

export const searchByGoods = (params: SearchParams, query: string) =>
  api.post<SupplierWithGoods>("good/search_with_params", params, {
    params: {
      like: query,
    },
  });

export const searchBySuppliers = (params: SearchParams, query: string) =>
  api.post<SupplierBase>("supplier/search_with_params", params, {
    params: {
      like: query,
    },
  });
