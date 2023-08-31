import { Link } from "react-router-dom";
import { ReactComponent as SchevronIcon } from "../../assets/icons/schevron.svg";
import CategoryCard from "../../UI/category-card/category-card";
import SupplierCard, {
  SupplierCardProps,
} from "../../UI/supplier-card/supplier-card";
import { ReactComponent as CheeseIcon } from "../../assets/icons/categories/cheese.svg";
import { ReactComponent as MeatIcon } from "../../assets/icons/categories/meat.svg";
import { ReactComponent as ShrimpIcon } from "../../assets/icons/categories/shrimp.svg";

export function HomePage() {
  const supplierCardPropsFirst: SupplierCardProps = {
    email: "kareliaveg@gmail.com",
    companyName: "Karelia_Vegetarian",
    companyLogo: "../src/assets/images/supplier-logo.png",
    companyImage: "../src/assets/images/supplier-2.png",
    daysToSupply: "1-2",
    minPrice: "2000",
  };
  const supplierCardPropsSecond: SupplierCardProps = {
    email: "super-supplier@gmail.com",
    companyName: "Growfood",
    companyLogo: "../src/assets/images/supplier-logo.png",
    companyImage: "../src/assets/images/supplier-3.png",
    daysToSupply: "1",
    minPrice: "1500",
  };

  return (
    <div className="w-full bg-basic-1">
      <div className="mb-3 rounded-b-2xl bg-basic-0 p-5 pt-0">
        <div className="mb-3 flex items-baseline justify-between">
          <h1 className="text-h1_m text-text-3">Категории</h1>
          <Link className="text-b3_m text-text-0" to="./categories">
            посмотреть все
            <SchevronIcon className="inline w-[1em] -rotate-90" />
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <CategoryCard title="Молочные продукты" url="../categories/milk">
            <CheeseIcon />
          </CategoryCard>
          <CategoryCard title="Рыба / морепродукты" url="../categories/seafood">
            <ShrimpIcon />
          </CategoryCard>
          <CategoryCard title="Мясо" url="../categories/meat">
            <MeatIcon />
          </CategoryCard>
        </div>
      </div>
      <div className="rounded-t-2xl bg-basic-0 p-5">
        <h1 className="mb-2 text-start text-h1_m text-text-3">Поставщики</h1>
        <div className="mb-7">
          <SupplierCard {...supplierCardPropsFirst} />
        </div>
        <div className="mb-7">
          <SupplierCard {...supplierCardPropsSecond} />
        </div>
      </div>
    </div>
  );
}
