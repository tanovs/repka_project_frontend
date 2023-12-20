import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as SchevronIcon } from "../../assets/icons/schevron.svg";
import SupplierCard, {
  SupplierCardProps,
} from "../../UI/supplier-card/supplier-card";
import Categories from "@/modules/categories";
import SuppliersBlock from "@/modules/suppliers-block";

export function HomePage() {
  const navigate = useNavigate();

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
        <Categories scrollable />
      </div>
      <SuppliersBlock />
    </div>
  );
}
