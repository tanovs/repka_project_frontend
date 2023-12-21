import { SmallGoodsCardProps } from "@/UI/small-goods-card/small-goods-card";
import SupplierAndGoodsBlock from "@/components/supplier-and-goods-block";
import { SupplierAndGoodsBlockProps } from "@/components/supplier-and-goods-block/supplier-and-goods-block";

export type SuppliersWithTagProps = {
  tagName: string;
  suppliers: SupplierAndGoodsBlockProps[];
};

export function SuppliersWithTag({
  tagName,
  suppliers,
}: SuppliersWithTagProps) {
  return (
    <div>
      <div className="mb-5 pt-6 text-h2_m text-text-3">{tagName}</div>
      <div className="flex flex-col gap-5">
        {suppliers.map((supplierProps) => (
          <SupplierAndGoodsBlock {...supplierProps} />
        ))}
      </div>
    </div>
  );
}
