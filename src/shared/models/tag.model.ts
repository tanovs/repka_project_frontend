export type Tag = {
  id: string;
  tag_name: string;
  category_name: string;
};

export type TagsResponse = {
  tags: Tag[];
};
