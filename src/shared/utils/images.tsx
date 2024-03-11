import { PictureType } from "../models/pictures.model";

const getImageUrl = (path: string): string =>
  new URL(`/src/assets/${path}`, import.meta.url).href;

const getStubImageUrl = (imageName: string) =>
  getImageUrl(`stub-images/${imageName}`);

export const IMAGES = {
  orderComplete: new URL(
    "@/assets/icons/order-complete-image.svg",
    import.meta.url,
  ).href,
  supplierRegistration: new URL(
    "@/assets/icons/supplier-registration-image.svg",
    import.meta.url,
  ).href,
};

export const STUB_IMAGE_URLS: Record<PictureType, string> = {
  product: getStubImageUrl(`product-empty-image.png`),
  supplier: getStubImageUrl("supplier-empty-image.png"),
  supplierLogo: getStubImageUrl(`supplier-logo-empty-image.png`),
};
