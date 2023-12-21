import { HeaderTags } from "@/components/header-tags/header-tags";
import { TagBase } from "@/shared/models/tag.model";
import { useState, useEffect } from "react";
import { getSupplierTags } from "@/shared/api/supplier";
import GoodsSearch from "../goods-search";

export type SupplierProductListProps = {
  supplierId?: string;
};

export function SupplierProductList({ supplierId }: SupplierProductListProps) {
  const [tags, setTags] = useState<TagBase[]>([]);
  const [chosenTags, setChosenTags] = useState<TagBase[]>([]);

  useEffect(() => {
    if (!supplierId) {
      throw Error("No URL supplierId param!");
    }
    getSupplierTags(supplierId).then((res) => setTags(res.data));
  }, []);

  return (
    <div>
      <HeaderTags
        // TODO change
        headerTitle="Товары поставщика"
        tags={tags}
        tagsIdSelected={[]}
        onSelectedTagsChange={(tagArr) => setChosenTags([...tagArr])}
      />
      <div className="rounded-2xl bg-basic-0 px-5">
        <GoodsSearch supplierId={supplierId} tags={chosenTags} />
      </div>
    </div>
  );
}
