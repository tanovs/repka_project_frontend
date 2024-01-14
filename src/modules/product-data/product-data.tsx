import { getProductPicture } from "@/shared/api/pictures";
import { getGoodFullData } from "@/shared/api/product";
import { GoodFull } from "@/shared/models/good.model";
import { useEffect, useState } from "react";
import ProductDataDisplay from "./product-data-display";

export type ProductDataProps = {
  id?: string;
};

export default function ProductData({ id }: ProductDataProps) {
  const [productData, setProductData] = useState<GoodFull>();
  const [productPicUrl, setProductPicUrl] = useState<string>();

  useEffect(() => {
    if (!id) {
      throw Error("Product id not defined!");
    }
    Promise.allSettled([getGoodFullData(id), getProductPicture(id)]).then(
      (res) => {
        res[0].status === "fulfilled"
          ? setProductData(res[0].value.data)
          : null;
        res[1].status === "fulfilled" ? setProductPicUrl(res[1].value) : null;
      }
    );
  });

  if (id && productData) {
    return (
      <ProductDataDisplay
        id={id}
        productData={productData}
        productPicUrl={productPicUrl}
      />
    );
  } else {
    return null;
  }
}
