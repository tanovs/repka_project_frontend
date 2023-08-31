import CategoryCard from "../../UI/category-card/category-card";
import { ReactComponent as CheeseIcon } from "../../assets/icons/categories/cheese.svg";
import { ReactComponent as MeatIcon } from "../../assets/icons/categories/meat.svg";
import { ReactComponent as ShrimpIcon } from "../../assets/icons/categories/shrimp.svg";
import { ReactComponent as EggIcon } from "../../assets/icons/categories/egg.svg";
import { ReactComponent as SoyIcon } from "../../assets/icons/categories/soy.svg";
import { ReactComponent as VegetablesIcon } from "../../assets/icons/categories/vegetables.svg";
import { ReactComponent as GreensIcon } from "../../assets/icons/categories/greens.svg";
import { ReactComponent as MushroomsIcon } from "../../assets/icons/categories/mushrooms.svg";
import { ReactComponent as NutsIcon } from "../../assets/icons/categories/nuts.svg";
import { ReactComponent as BreadIcon } from "../../assets/icons/categories/bread.svg";
import { ReactComponent as SpicesIcon } from "../../assets/icons/categories/spices.svg";
import { ReactComponent as ChemicalsIcon } from "../../assets/icons/categories/chemicals.svg";
import { ReactComponent as DishesIcon } from "../../assets/icons/categories/dishes.svg";
import { ReactComponent as EquipmentIcon } from "../../assets/icons/categories/equipment.svg";
import { ReactComponent as OthersIcon } from "../../assets/icons/categories/others.svg";
import { ReactComponent as CrossIcon } from "../../assets/icons/cross.svg";
import { ButtonIcon } from "../../UI/button-icon/button-icon";
import { useNavigate } from "react-router-dom";

export function CategoriesPage() {
  const navigate = useNavigate();

  return (
    <div className="mb-3 rounded-b-2xl bg-basic-0 p-5 pt-0">
      <div className="mb-3 flex items-baseline justify-between">
        <h1 className="text-h1_m text-text-3">Категории</h1>
        <ButtonIcon hasBackground={true} onClick={() => navigate(-1)}>
          <CrossIcon />
        </ButtonIcon>
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
        <CategoryCard title="Яйцо / яичные продукты" url="../categories/egg">
          <EggIcon />
        </CategoryCard>
        <CategoryCard title="Соевые продукты" url="../categories/soy">
          <SoyIcon />
        </CategoryCard>
        <CategoryCard title="Овощи" url="../categories/vegetables">
          <VegetablesIcon />
        </CategoryCard>
        <CategoryCard title="Зелень / травы" url="../categories/greens">
          <GreensIcon />
        </CategoryCard>
        <CategoryCard title="Грибы" url="../categories/meat">
          <MushroomsIcon />
        </CategoryCard>
        <CategoryCard title="Орехи" url="../categories/meat">
          <NutsIcon />
        </CategoryCard>
        <CategoryCard title="Мука / мучные продукты" url="../categories/meat">
          <BreadIcon />
        </CategoryCard>
        <CategoryCard title="Специи / пряности" url="../categories/meat">
          <SpicesIcon />
        </CategoryCard>
        <CategoryCard title="Хоз. товары" url="../categories/meat">
          <ChemicalsIcon />
        </CategoryCard>
        <CategoryCard title="Посуда" url="../categories/meat">
          <DishesIcon />
        </CategoryCard>
        <CategoryCard title="Оборудование" url="../categories/meat">
          <EquipmentIcon />
        </CategoryCard>
        <CategoryCard title="Другое" url="../categories/meat">
          <OthersIcon />
        </CategoryCard>
      </div>
    </div>
  );
}
