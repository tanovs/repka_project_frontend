import { useEffect, useState } from "react";
import { SupplierInfo } from "./supplier-info";
import {
  getSupplierFullData,
  getSupplierProducts,
} from "@/shared/api/supplier";
import { SupplierFullData } from "@/shared/models/supplier.model";
import SupplierAndGoodsBlock from "@/components/supplier-and-goods-block";
import {
  transformGoodsToCardsWithPics,
  transformSupplierSearchToSupplierGoodsBlockProps,
} from "../supplier-with-goods-search/supplier-with-goods-search";
import { SmallGoodsCardProps } from "@/UI/small-goods-card/small-goods-card";
import { getSupplierLogo, getSupplierPicture } from "@/shared/api/pictures";

export type SupplierFullDataProps = {
  supplierId: string;
};

export function SupplierFullInfoDisplay({ supplierId }: SupplierFullDataProps) {
  const [supplierData, setSupplierData] = useState<SupplierFullData>({});
  const [supplierGoods, setSupplierGoods] = useState<SmallGoodsCardProps[]>([]);
  const [supplierLogoUrl, setSupplierLogoUrl] = useState<string>("");
  const [supplierPicUrl, setSupplierPicUrl] = useState<string>("");

  useEffect(() => {
    getSupplierFullData(supplierId).then(setSupplierData);
  }, []);

  useEffect(() => {
    getSupplierProducts(supplierId, 6).then((res) => {
      transformGoodsToCardsWithPics(res.data).then(setSupplierGoods);
    });
  }, []);

  useEffect(() => {
    getSupplierPicture(supplierId, true).then(setSupplierPicUrl);
  }, []);

  useEffect(() => {
    getSupplierLogo(supplierId).then(setSupplierLogoUrl);
  }, []);

  return (
    <>
      <SupplierInfo
        imageUrl={supplierPicUrl}
        logoUrl={supplierLogoUrl}
        supplierData={supplierData}
      />
      <div className="mt-2 rounded-2xl bg-basic-0 p-6">
        <SupplierAndGoodsBlock
          id={supplierId}
          name="Товары поставщика"
          goods={supplierGoods}
        />
      </div>
    </>
  );
}
