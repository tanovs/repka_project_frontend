import { AxiosResponse } from "axios";
import { api } from "./core/config";
import { PictureType } from "../models/pictures.model";
import { STUB_IMAGE_URLS } from "../utils/images";

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
    .then(transformBlobToImage("supplierLogo"))
    .catch(() => mockPic("supplierLogo"));

const transformBlobToImage = (emptyTemplate?: PictureType) => {
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

const mockPic = (emptyTemplate: PictureType) => {
  return STUB_IMAGE_URLS[emptyTemplate];
};
