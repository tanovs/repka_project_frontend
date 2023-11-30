export type Category = {
  id: string;
  category_name: string;
  category_enum: string;
};

export type CategoriesResponse = {
  categories: Category[];
};
