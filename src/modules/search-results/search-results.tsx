import { useNavigate } from "react-router-dom";
import SupplierWithGoods, {
  SupplierWithGoodsProps,
} from "../../components/supplier-with-goods";

export default function SearchResults() {
  const navigate = useNavigate();

  function goToSupplierPage(supplierId: string): void {
    navigate(`/suplier/${supplierId}`);
  }

  const suppliersPropsFirst: SupplierWithGoodsProps[] = [
    {
      name: "Поставщика мяса «Meatly»",
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
      ],
    },
  ];
  const suppliersPropsSecond: SupplierWithGoodsProps[] = [
    {
      name: "«Mr&Meat» мясной магазин",
      id: "id2",
      goods: [
        {
          id: "1",
          editMode: false,
          imageUrl: "../src/assets/images/meat-4.png",
          price: "440",
          title: "Окорок свинина",
          weight: "3 кг",
        },
        {
          id: "2",
          editMode: false,
          imageUrl: "../src/assets/images/meat-5.png",
          price: "440",
          title: "Куриное филе, разделанное",
          weight: "3 кг",
        },
        {
          id: "3",
          editMode: false,
          imageUrl: "../src/assets/images/meat-6.png",
          price: "440",
          title: "Отбивная, свинина",
          weight: "3 кг",
        },
      ],
    },
  ];
  return (
    <div className="px-5">
      <div className="flex h-20 items-center text-h1_m text-text-3">Товары</div>
      <div>
        {suppliersPropsFirst.map((supplier) => (
          <SupplierWithGoods {...supplier} key={supplier.id} />
        ))}
        {suppliersPropsSecond.map((supplier) => (
          <SupplierWithGoods {...supplier} key={supplier.id} />
        ))}
      </div>
    </div>
  );
}
