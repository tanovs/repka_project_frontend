import { AxiosResponse } from "axios";
import { api } from "./core/config";

export const getProductPicture = (id: string, emptyPicAllowed?: boolean) =>
  api
    .get(`good/photo/${id}`, {
      responseType: "blob",
    })
    .then(transformBlobToImage(emptyPicAllowed ? "product" : undefined))
    .catch(() => mockPic("product"));

export const getSupplierPicture = (id: string, emptyAllowed?: boolean) =>
  api
    .get(`cover/${id}`, {
      responseType: "blob",
    })
    .then(transformBlobToImage(emptyAllowed ? "supplier" : undefined))
    .catch(() => mockPic("supplier"));

export const getSupplierLogo = (id: string) =>
  api
    .get(`logo/${id}`, {
      responseType: "blob",
    })
    .then(transformBlobToImage("supplier-logo"))
    .catch(() => mockPic("supplier-logo"));

const transformBlobToImage = (
  emptyTemplate?: "product" | "supplier" | "supplier-logo"
) => {
  return (res: AxiosResponse<Blob, unknown>) => {
    if (res.data?.size) {
      return URL.createObjectURL(res.data);
    }
    if (!emptyTemplate) {
      return "";
    }

    return mockPic(emptyTemplate);
  };
};

const mockPic = (emptyTemplate?: "product" | "supplier" | "supplier-logo") => {
  const b = `../../../src/assets/images/${emptyTemplate}-empty-image.png`;
  return new URL(b, import.meta.url).href;
};
