import SupplierFullInfoDisplay from "../../modules/supplier-full-info-display";
import { useParams } from "react-router-dom";

export function SupplierPage() {
  const { supplierId } = useParams();
  if (!supplierId) {
    return null;
  }
  return (
    <div className="h-screen w-full overflow-auto">
      <SupplierFullInfoDisplay supplierId={supplierId} />
    </div>
  );
}
