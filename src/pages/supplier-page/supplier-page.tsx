import SupplierInfo from "../../modules/supplier-info";
import SupplierWithGoods, {
  SupplierWithGoodsProps,
} from "../../components/supplier-with-goods";

export function SupplierPage() {
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
  return (
    <div className="absolute top-0 z-[1] w-full">
      <SupplierInfo id="2" />
      <div className="mt-2 rounded-2xl bg-basic-0 p-6">
        <SupplierWithGoods {...suppliersPropsFirst} />
      </div>
    </div>
  );
}
