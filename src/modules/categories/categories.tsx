import { useEffect, useRef, useState } from "react";
import {
  CategoriesBar,
  CategoriesBarProps,
} from "./categories-bar/categories-bar";
import { getAllCategories } from "@/shared/api/categories";
import { Category } from "src/shared/models/category.model";
import { CategoryCardProps } from "src/UI/category-card/category-card";

export type CategoriesProps = {
  scrollable?: boolean;
};

export function Categories({ scrollable }: CategoriesProps) {
  const [categoriesProps, setCategoriesProps] = useState<CategoryCardProps[]>(
    []
  );

  useEffect(() => {
    getAllCategories().then((res) => {
      setCategoriesProps(parseCategoriesToProps(res.data.categories));
    });
  }, []);

  return (
    // TODO add skeleton
    <CategoriesBar cardsProps={categoriesProps} scrollable={scrollable} />
  );
}

const parseCategoriesToProps = (categories: Category[]): CategoryCardProps[] =>
  categories.map(({ category_enum, category_name, id }) => {
    // TODO не работает абсолютный импорт и через алиасы
    const b = `../../../src/assets/icons/categories/${category_enum}.svg`;
    const a = new URL(b, import.meta.url).href;

    return {
      iconUrl: a,
      title: category_name,
      url: `../categories/${id}`,
    };
  });
