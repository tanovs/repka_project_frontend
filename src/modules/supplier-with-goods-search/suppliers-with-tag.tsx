import { SmallGoodsCardProps } from "@/UI/small-goods-card/small-goods-card";
import SupplierAndGoodsBlock from "@/components/supplier-and-goods-block";
import { SupplierWithGoods } from "@/shared/models/supplier.model";

export type SuppliersWithTagProps = {
  tagName: string;
  suppliers: SupplierWithGoods[];
};

export function SuppliersWithTag({
  tagName,
  suppliers,
}: SuppliersWithTagProps) {
  const suppliersAndGoods = suppliers.map(
    ({ goods, supplier_id, supplier_name }, indx) => {
      const transformedGoods: SmallGoodsCardProps[] = goods.map((item) => ({
        id: item.id,
        title: item.name,
        price: item.price,
        weight: item.volume,
        imageUrl: "",
        editMode: false,
      }));

      return (
        <SupplierAndGoodsBlock
          id={supplier_id}
          name={supplier_name}
          goods={transformedGoods}
          key={indx}
        />
      );
    }
  );

  return (
    <div>
      <div className="mb-5 mt-2 text-h2_m text-text-3">{tagName}</div>
      <div className="grid grid-cols-3 gap-3">{...suppliersAndGoods}</div>
    </div>
  );
}
