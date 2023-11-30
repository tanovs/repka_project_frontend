import { TagsResponse } from "../models/tag.model";
import { api } from "./core/config";

const TAGS_BASE = "good_tag";

const getAllTags = () =>
  api.get<TagsResponse>(`${TAGS_BASE}/all`, {
    params: {
      size: 100,
    },
  });

const getTagsLike = (query: string) =>
  api.get<TagsResponse>(`${TAGS_BASE}/like`, {
    params: {
      like: query,
    },
  });

const getCategoriesTag = (categoryId: string) =>
  api.get<TagsResponse>(`${TAGS_BASE}/${categoryId}`);

const getCategoriesTagLike = (categoryId: string, query: string) =>
  api.get<TagsResponse>(`${TAGS_BASE}/${categoryId}/like`, {
    params: {
      like: query,
    },
  });

export { getAllTags, getTagsLike, getCategoriesTag, getCategoriesTagLike };
