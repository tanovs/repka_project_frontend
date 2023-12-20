import { AxiosResponse } from "axios";
import { GoodBase } from "../models/good.model";
import {
  SupplierContacts,
  SupplierDeliveryInfo,
  SupplierDocuments,
  SupplierFullData,
  SupplierTitleAndWorkingHours,
} from "../models/supplier.model";
import { TagBase, TagCategory } from "../models/tag.model";
import { api } from "./core/config";

const SUPPLIER_BASE = "/supplier";

export const getSupplierFullData = (id: string) =>
  Promise.allSettled([
    getSupplierTitleAndWorkingHours(id),
    getSupplierContactData(id),
    getSupplierDeliveryInfo(id),
    getSupplierDocuments(id),
  ]).then((res) => {
    return Promise.resolve(supplierMockData);

    const axiosResponseFullfillHandler = <T>(
      result: PromiseSettledResult<AxiosResponse<T, unknown>>
    ) => (result.status === "fulfilled" ? result.value.data : undefined);

    return <SupplierFullData>{
      titleAndWorkingHours: axiosResponseFullfillHandler(res[0]),
      contacts: axiosResponseFullfillHandler(res[1]),
      deliveryInfo: axiosResponseFullfillHandler(res[2]),
      documents: axiosResponseFullfillHandler(res[3]),
    };
  });

export const getSupplierContactData = (id: string) =>
  api.get<SupplierContacts>(`${SUPPLIER_BASE}/contacts/${id}`);

export const getSupplierTitleAndWorkingHours = (id: string) =>
  api.get<SupplierTitleAndWorkingHours>(`${SUPPLIER_BASE}/company_name/${id}`);

export const getSupplierDeliveryInfo = (id: string) =>
  api.get<SupplierDeliveryInfo>(`${SUPPLIER_BASE}/delivery_info/${id}`);

export const getSupplierDocuments = (id: string) =>
  api.get<SupplierDocuments>(`${SUPPLIER_BASE}/documents/${id}`);

export const getSupplierProducts = (id: string, size: number) =>
  api.get<GoodBase[]>(`${SUPPLIER_BASE}/good/${id}`, {
    params: {
      size,
    },
  });

export const getSupplierTags = (id: string) =>
  api.get<TagBase[]>(`${SUPPLIER_BASE}/tag/${id}`);

export const getSupplierGoodByTag = (id: string, tagIds: string[]) =>
  api.post<GoodBase[]>(`${SUPPLIER_BASE}/good/category/${id}`, {
    tag_id: tagIds,
  });

const supplierMockData: SupplierFullData = {
  titleAndWorkingHours: {
    company_name: "Karelia_Vegetarian",
    orders_day_time: "Заказы принимаются с 10 утра до 7 вечера пн-пт",
  },
  contacts: {
    contact_name: "Андрей Андреевич",
    company_adress: "г. Москва, ул. Новокрестовская, 17 к.1",
    email: "Email@gmail.com",
    phone_number: "+7 (954) 656-16-17",
    social_network: "test",
    website: "Nice_Growfood.ru",
  },
  deliveryInfo: {
    city_name: ["Москва", "Санкт-Петербург", "Новосибирск"],
    region_name: ["Московская область", "Калужская область"],
    delivery_day_time: "Понедельник – пятница с 5 до 11 утра",
    min_price: "5000",
    estimated_delivery_time: "1 – 2 дня",
  },
  documents: {
    ooo: "12345678908765",
    ogrn: "1234509876543298",
    inn: "0987654",
  },
};
