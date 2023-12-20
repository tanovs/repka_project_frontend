import { GoodBase } from "./good.model";

export type SupplierBase = {
  id: string;
  company_name: string;
  estimated_delivery_time: string;
  min_price: string;
};

export type SupplierWithGoods = {
  supplier_id: string;
  supplier_name: string;
  goods: GoodBase[];
};

export type SupplierFullData = {
  titleAndWorkingHours?: SupplierTitleAndWorkingHours;
  contacts?: SupplierContacts;
  deliveryInfo?: SupplierDeliveryInfo;
  documents?: SupplierDocuments;
};

export type SupplierTitleAndWorkingHours = {
  company_name: string;
  orders_day_time: string;
};

export type SupplierContacts = {
  contact_name?: string;
  company_adress?: string;
  phone_number?: string;
  email?: string;
  website?: string;
  social_network?: string;
};

export type SupplierDeliveryInfo = {
  city_name: string[];
  region_name: string[];
  delivery_day_time: string;
  min_price?: string;
  estimated_delivery_time?: string;
};

export type SupplierDocuments = {
  ooo?: string;
  ogrn?: string;
  inn?: string;
};
