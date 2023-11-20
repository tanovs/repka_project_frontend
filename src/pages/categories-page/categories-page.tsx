import CategoryCard, {
  CategoryCardProps,
} from "../../UI/category-card/category-card";
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
import { ReactComponent as FruitsIcon } from "../../assets/icons/categories/fruits.svg";
import { ReactComponent as BerriesIcon } from "../../assets/icons/categories/berries.svg";
import { ReactComponent as FatsIcon } from "../../assets/icons/categories/fats.svg";
import { ReactComponent as CerealsIcon } from "../../assets/icons/categories/cereals.svg";
import { ReactComponent as DrinksIcon } from "../../assets/icons/categories/drinks.svg";
import { ReactComponent as AlcoholIcon } from "../../assets/icons/categories/alcogol.svg";
import { ReactComponent as DryedFruitsIcon } from "../../assets/icons/categories/dryed-fruits.svg";
import { ReactComponent as PreservesIcon } from "../../assets/icons/categories/preserves.svg";
import { ReactComponent as SweetsIcon } from "../../assets/icons/categories/sweets.svg";
import { ReactComponent as CrossIcon } from "../../assets/icons/cross.svg";
import { ButtonIcon } from "../../UI/button-icon/button-icon";
import { useNavigate } from "react-router-dom";
import { Categories } from "../../components/categories/categories";

export const categories: CategoryCardProps[] = [
  {
    title: "Молочные продукты",
    url: "../categories/milk",
    children: <CheeseIcon />,
  },
  {
    title: "Рыба / морепродукты",
    url: "../categories/seafood",
    children: <ShrimpIcon />,
  },
  {
    title: "Мясо",
    url: "../categories/seafood",
    children: <MeatIcon />,
  },
  {
    title: "Яйцо / яичные продукты",
    url: "../categories/egg",
    children: <EggIcon />,
  },
  {
    title: "Соевые продукты",
    url: "../categories/soy",
    children: <SoyIcon />,
  },
  {
    title: "Овощи",
    url: "../categories/vegetables",
    children: <VegetablesIcon />,
  },
  {
    title: "Зелень / травы",
    url: "../categories/greens",
    children: <GreensIcon />,
  },
  {
    title: "Фрукты",
    url: "../categories/greens",
    children: <FruitsIcon />,
  },
  {
    title: "Ягоды",
    url: "../categories/greens",
    children: <BerriesIcon />,
  },
  {
    title: "Грибы",
    url: "../categories/mushrooms",
    children: <MushroomsIcon />,
  },
  {
    title: "Орехи",
    url: "../categories/nuts",
    children: <NutsIcon />,
  },
  {
    title: "Жиры / масла",
    url: "../categories/nuts",
    children: <FatsIcon />,
  },
  {
    title: "Крупы / семена",
    url: "../categories/nuts",
    children: <CerealsIcon />,
  },
  {
    title: "Мука / мучные продукты",
    url: "../categories/milk",
    children: <BreadIcon />,
  },
  {
    title: "Напитки",
    url: "../categories/milk",
    children: <DrinksIcon />,
  },
  {
    title: "Алкоголь",
    url: "../categories/milk",
    children: <AlcoholIcon />,
  },
  {
    title: "Сухофрукты",
    url: "../categories/milk",
    children: <DryedFruitsIcon />,
  },
  {
    title: "Консервация",
    url: "../categories/milk",
    children: <PreservesIcon />,
  },
  {
    title: "Кондитерка",
    url: "../categories/milk",
    children: <SweetsIcon />,
  },
  {
    title: "Специи / пряности",
    url: "../categories/milk",
    children: <SpicesIcon />,
  },
  {
    title: "Хоз. товары",
    url: "../categories/milk",
    children: <ChemicalsIcon />,
  },
  {
    title: "Посуда",
    url: "../categories/milk",
    children: <DishesIcon />,
  },
  {
    title: "Оборудование",
    url: "../categories/milk",
    children: <EquipmentIcon />,
  },
  {
    title: "Другое",
    url: "../categories/milk",
    children: <OthersIcon />,
  },
];

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
      <Categories cardsProps={categories} />
    </div>
  );
}
