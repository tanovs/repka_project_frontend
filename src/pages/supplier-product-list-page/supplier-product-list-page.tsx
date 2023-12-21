import { useParams } from "react-router-dom";
import SupplierProductList from "@/modules/supplier-product-list";

export default function SupplierProductListPage() {
  const { supplierId } = useParams();

  return <SupplierProductList supplierId={supplierId} />;
}
