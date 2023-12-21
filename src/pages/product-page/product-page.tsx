import { useParams } from "react-router-dom";
import ProductData from "../../modules/product-data";

export default function ProductPage() {
  const { productId } = useParams();
  return (
    <div className="h-screen w-full bg-basic-0 pt-4">
      <ProductData id={productId} />
    </div>
  );
}
