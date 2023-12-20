import { useEffect, useState } from "react";
import SmallGoodsCard from "../../UI/small-goods-card/small-goods-card";
import { useParams } from "react-router-dom";
import { HeaderTags } from "../../components/header-tags/header-tags";
import { TagCategory } from "../../shared/models/tag.model";
import { getCategoriesTag } from "../../shared/api/tags";
import { getAllCategories } from "@/shared/api/categories";
import SupplierWithGoodsSearch from "@/modules/supplier-with-goods-search";

export default function ProductListPage() {
  const { categoryId } = useParams();
  const [tags, setTags] = useState<TagCategory[]>([]);
  const [chosenTags, setChosenTags] = useState<TagCategory[]>([]);
  const [headerTitle, setHeaderTitle] = useState<string>("");

  useEffect(() => {
    if (!categoryId) {
      throw Error("No URL categoryId param!");
    }
    getCategoriesTag(categoryId).then((res) => setTags(res.data.tags));
  }, []);

  useEffect(() => {
    getAllCategories().then((res) => {
      const title = res.data.categories.find(
        (category) => category.id === categoryId
      )?.category_name;
      if (title) {
        setHeaderTitle(title);
      }
    });
  }, []);

  return (
    <div>
      <HeaderTags
        // TODO change
        headerTitle={headerTitle}
        tags={tags}
        tagsIdSelected={[]}
        onSelectedTagsChange={(tagArr) => setChosenTags([...tagArr])}
      />
      <div className="rounded-2xl bg-basic-0 p-5">
        <SupplierWithGoodsSearch categoryId={categoryId} tags={chosenTags} />
      </div>
    </div>
  );
}
