import React from "react";
import CategoryCard, {
  CategoryCardProps,
} from "../../UI/category-card/category-card";

export type CategoriesProps = {
  cardsProps: CategoryCardProps[];
  scrollable?: boolean;
  className?: string;
};

export function Categories({
  cardsProps,
  scrollable,
  className = "",
}: CategoriesProps) {
  return (
    <div className={className}>
      <div
        className={
          scrollable
            ? "flex gap-2 overflow-auto px-5"
            : "grid grid-cols-3 gap-3"
        }
      >
        {cardsProps.map((cardProps, indx) => (
          <CategoryCard key={indx} title={cardProps.title} url={cardProps.url}>
            {cardProps.children}
          </CategoryCard>
        ))}
      </div>
    </div>
  );
}
