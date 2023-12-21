import { GoodFull } from "../models/good.model";
import { api } from "./core/config";

const GOOD_BASE_URL = "/good";

export const getGoodFullData = (id: string) =>
  api
    .get<GoodFull>(`${GOOD_BASE_URL}/information/${id}`)
    .catch(() => ({ data: goodFullDataMock }));

const goodFullDataMock: GoodFull = {
  name: "Молоко коровье 5% пастеризованное",
  volume: "500 мл",
  price: "2000",
  balance: "balance",
  calories: "53",
  compound: "Молоко цельное нормализованное",
  expiration_day: "15 дней, от + 2 °С до +6 °С",
  producer:
    "Весёлый молочник, Балтийское молоко филиал АО “ВБД”, Российская Федерация",
  sample: false,
  sample_amount: 1,
};
