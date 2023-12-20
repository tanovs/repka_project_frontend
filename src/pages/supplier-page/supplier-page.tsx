import SupplierInfo from "../../modules/supplier-full-info-display";
import SupplierAndGoodsBlock, {
  SupplierWithGoodsProps,
} from "../../components/supplier-and-goods-block";
import SupplierFullInfoDisplay from "../../modules/supplier-full-info-display";
import { useParams } from "react-router-dom";

export function SupplierPage() {
  const { supplierId } = useParams();
  const suppliersPropsFirst: SupplierWithGoodsProps = {
    name: "Товары поставщика",
    id: "id1",
    goods: [
      {
        id: "1",
        editMode: false,
        imageUrl: "../src/assets/images/meat-1.png",
        price: "440",
        title: "Мясное ассорти: говядина, свинина",
        weight: "1 кг",
      },
      {
        id: "2",
        editMode: false,
        imageUrl: "../src/assets/images/meat-2.png",
        price: "440",
        title: "Бедро ягнёнка",
        weight: "3 кг",
      },
      {
        id: "3",
        editMode: false,
        imageUrl: "../src/assets/images/meat-3.png",
        price: "440",
        title: "Стейк, говядина",
        weight: "1 кг",
      },
      {
        id: "4",
        editMode: false,
        imageUrl: "../src/assets/images/meat-4.png",
        price: "440",
        title: "Окорок свинина",
        weight: "3 кг",
      },
      {
        id: "5",
        editMode: false,
        imageUrl: "../src/assets/images/meat-5.png",
        price: "440",
        title: "Куриное филе, разделанное",
        weight: "3 кг",
      },
      {
        id: "6",
        editMode: false,
        imageUrl: "../src/assets/images/meat-6.png",
        price: "440",
        title: "Отбивная, свинина",
        weight: "3 кг",
      },
    ],
  };
  if (!supplierId) {
    return null;
  }
  return (
    <div className="absolute top-0 z-[1] w-full">
      <SupplierFullInfoDisplay supplierId={supplierId} />
    </div>
  );
}
