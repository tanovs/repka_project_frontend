import { CategoriesResponse } from "../models/category.model";
import { api } from "./core/config";

const CATEGORIES_BASE = "category";

const getAllCategories = () =>
  api.get<CategoriesResponse>(`${CATEGORIES_BASE}/all`, {
    params: {
      size: 100,
    },
  });

const getCategoriesLike = (query: string) =>
  api.get<CategoriesResponse>(`${CATEGORIES_BASE}/like`, {
    params: {
      like: query,
    },
  });

export { getAllCategories, getCategoriesLike };
