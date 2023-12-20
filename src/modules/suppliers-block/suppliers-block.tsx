import { SearchEmptyTemplate } from "@/UI/search-empty-template/search-empty-template";
import SupplierCard, {
  SupplierCardProps,
} from "@/UI/supplier-card/supplier-card";
import { searchBySuppliers } from "@/shared/api/search";
import { SupplierBase } from "@/shared/models/supplier.model";
import { useEffect, useState } from "react";

export type SuppliersBlockProps = {};

export function SuppliersBlock({}: SuppliersBlockProps) {
  const [supplierCardProps, setSupplierCardProps] = useState<
    SupplierCardProps[]
  >([]);

  useEffect(() => {
    searchBySuppliers({}, "").then((res) => {
      const initialCardProps: SupplierCardProps[] = res.data.map(
        (supplier) => ({
          companyName: supplier.company_name,
          minPrice: supplier.min_price,
          id: supplier.id,
          daysToSupply: supplier.estimated_delivery_time,
        })
      );
      setSupplierCardProps(initialCardProps);
    });
  }, []);

  return (
    <div className="rounded-t-2xl bg-basic-0 p-5">
      <h1 className="mb-2 text-start text-h1_m text-text-3">Поставщики</h1>
      {supplierCardProps.length ? (
        supplierCardProps.map((cardProps) => (
          <div className="mb-7">
            <SupplierCard {...cardProps} />
          </div>
        ))
      ) : (
        <SearchEmptyTemplate />
      )}
    </div>
  );
}
