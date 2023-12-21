export type GoodBase = {
  id: string;
  name: string;
  volume: string;
  price: string;
};

export type GoodFull = Omit<GoodBase, "id"> & {
  balance: string;
  calories: string;
  compound: string;
  expiration_day: string;
  producer: string;
  sample: boolean;
  sample_amount?: number;
};
