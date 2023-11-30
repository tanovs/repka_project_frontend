import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as SchevronIcon } from "../../assets/icons/schevron.svg";
import SupplierCard, {
  SupplierCardProps,
} from "../../UI/supplier-card/supplier-card";
import Categories from "@/modules/categories";

export function HomePage() {
  const navigate = useNavigate();
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
      <div className="mb-3 rounded-b-2xl bg-basic-0 pb-3 pt-0">
        <div className="mb-3 flex items-baseline justify-between px-5">
          <h1 className="text-h1_m text-text-3">Категории</h1>
          <Link className="text-b3_m text-text-0" to="./categories">
            посмотреть все
            <SchevronIcon className="inline w-[1em] -rotate-90" />
          </Link>
        </div>
        {/* <CategoriesBar cardsProps={categories} scrollable /> */}
        <Categories scrollable />
      </div>
      <div className="rounded-t-2xl bg-basic-0 p-5">
        <h1 className="mb-2 text-start text-h1_m text-text-3">Поставщики</h1>
        <div className="mb-7">
          <SupplierCard {...supplierCardPropsFirst} />
        </div>
        <div className="mb-7">
          <SupplierCard {...supplierCardPropsSecond} />
        </div>
        <div className="mb-7">
          <SupplierCard {...supplierCardPropsSecond} />
        </div>
      </div>
    </div>
  );
}
