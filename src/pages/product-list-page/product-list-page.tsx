import { useEffect, useState } from "react";
import Chip, { ChipProps } from "../../UI/chip/chip";
import ChipsWrapped from "../../UI/chips-wrapped/chips-wrapped";
import { HeaderWithButtons } from "../../UI/header-with-back-button/header-with-back-button";
import SmallGoodsCard from "../../UI/small-goods-card/small-goods-card";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { HeaderTags } from "../../components/header-tags/header-tags";
import { Tag } from "../../shared/models/tag.model";
import { getAllTags, getCategoriesTag } from "../../shared/api/tags";
import { getAllCategories } from "@/shared/api/categories";

export default function ProductListPage() {
  const { categoryId } = useParams();
  const [tags, setTags] = useState<Tag[]>([]);
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

  const supplierGoods = [
    {
      id: "1",
      editMode: false,
      imageUrl: "../src/assets/images/meat-4.png",
      price: "440",
      title: "Окорок свинина",
      weight: "3 кг",
    },
    {
      id: "2",
      editMode: false,
      imageUrl: "../src/assets/images/meat-5.png",
      price: "440",
      title: "Куриное филе, разделанное",
      weight: "3 кг",
    },
    {
      id: "3",
      editMode: false,
      imageUrl: "../src/assets/images/meat-6.png",
      price: "440",
      title: "Отбивная, свинина",
      weight: "3 кг",
    },
  ];

  return (
    <div>
      <HeaderTags
        // TODO change
        headerTitle={headerTitle}
        tags={tags}
        tagsIdSelected={[]}
        onSelectedTagsChange={(tags) => console.log(tags)}
      />
      <div className="rounded-2xl bg-basic-0 p-5">
        <div className="mb-5 mt-2 text-h2_m text-text-3">Сыр</div>
        <div className="grid grid-cols-3 gap-3">
          {supplierGoods.map((goodProps) => (
            <SmallGoodsCard {...goodProps} key={goodProps.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
