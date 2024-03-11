import { SearchEmptyTemplate } from "@/UI/search-empty-template/search-empty-template";
import SupplierCard, {
  SupplierCardProps,
} from "@/UI/supplier-card/supplier-card";
import { getSupplierLogo, getSupplierPicture } from "@/shared/api/pictures";
import { searchBySuppliers } from "@/shared/api/search";
import { useEffect, useState } from "react";

// export type SuppliersBlockProps = {};

export function SuppliersBlock() {
  const [supplierCardProps, setSupplierCardProps] = useState<
    SupplierCardProps[]
  >([]);

  useEffect(() => {
    searchBySuppliers({}, "")
      .then((res) => {
        return Promise.all([
          Promise.resolve(res.data),
          Promise.all(
            res.data.map((supplier) => getSupplierPicture(supplier.id)),
          ),
          Promise.all(res.data.map((supplier) => getSupplierLogo(supplier.id))),
        ]);
      })
      .then(([suppliers, suppliersCovers, suppliersLogos]) => {
        const initialCardProps: SupplierCardProps[] = suppliers.map(
          (supplier, index) => ({
            companyName: supplier.company_name,
            minPrice: supplier.min_price,
            id: supplier.id,
            daysToSupply: supplier.estimated_delivery_time,
            companyImage: suppliersCovers[index],
            companyLogo: suppliersLogos[index],
          }),
        );
        setSupplierCardProps(initialCardProps);
      });
  }, []);

  return (
    <div className="rounded-t-2xl bg-basic-0 p-5">
      <h1 className="mb-2 text-start text-h1_m text-text-3">Поставщики</h1>
      {supplierCardProps.length ? (
        supplierCardProps.map((cardProps, indx) => (
          <div className="mb-7" key={indx}>
            <SupplierCard {...cardProps} />
          </div>
        ))
      ) : (
        <SearchEmptyTemplate />
      )}
    </div>
  );
}
