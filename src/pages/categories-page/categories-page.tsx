import { ReactComponent as CrossIcon } from "@assets/icons/cross.svg";
import { ButtonIcon } from "../../UI/button-icon/button-icon";
import { useNavigate } from "react-router-dom";
import Categories from "@/modules/categories";

export function CategoriesPage() {
  const navigate = useNavigate();

  return (
    <div className="mb-3 rounded-b-2xl bg-basic-0 p-5 pt-0">
      <div className="mb-3 flex items-baseline justify-between">
        <h1 className="text-h1_m text-text-3">Категории</h1>
        <ButtonIcon hasBackground={true} onClick={() => navigate("../")}>
          <CrossIcon />
        </ButtonIcon>
      </div>
      {/* <CategoriesBar cardsProps={categories} /> */}
      <Categories />
    </div>
  );
}
