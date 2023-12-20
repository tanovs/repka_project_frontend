export type TagBase = {
  id: string;
  tag_name: string;
};

export type TagCategory = TagBase & {
  category_name: string;
};

export type TagsResponse = {
  tags: TagCategory[];
};
