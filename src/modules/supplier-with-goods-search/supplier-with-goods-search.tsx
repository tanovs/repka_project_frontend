import { searchByGoods } from "@/shared/api/search";
import { SupplierWithGoods } from "@/shared/models/supplier.model";
import { TagCategory } from "@/shared/models/tag.model";
import { useEffect, useState } from "react";
import { SuppliersWithTag, SuppliersWithTagProps } from "./suppliers-with-tag";
import { getProductPicture } from "@/shared/api/pictures";
import {
  SupplierAndGoodsBlock,
  SupplierAndGoodsBlockProps,
} from "@/components/supplier-and-goods-block/supplier-and-goods-block";
import { SmallGoodsCardProps } from "@/UI/small-goods-card/small-goods-card";
import { SearchEmptyTemplate } from "@/UI/search-empty-template/search-empty-template";
import { GoodBase } from "@/shared/models/good.model";

export type SupplierWithGoodsSearchProps = {
  tags?: TagCategory[];
  categoryId?: string;
};

export function SupplierWithGoodsSearch({
  tags,
  categoryId,
}: SupplierWithGoodsSearchProps) {
  const [searchByTagsMode, setSearchByTags] = useState(!!tags?.length);
  const [resultsByTag, setResultsByTag] = useState<
    [string, SupplierAndGoodsBlockProps[]][]
  >([]);
  const [defaultSearchResults, setDefaultSerachResults] = useState<
    SupplierAndGoodsBlockProps[]
  >([]);

  useEffect(() => {
    const isTagsAvailable = !!tags?.length;
    isTagsAvailable ? searchByTags() : defaultSearch();
    setSearchByTags(isTagsAvailable);
  }, [JSON.stringify(tags)]);

  const searchByTags = () => {
    const searches = (tags || [])?.map((tag) =>
      searchByGoods({
        category_id: categoryId ? [categoryId] : [],
        tag_id: [tag.id],
      })
    );

    Promise.all(searches)
      .then((searchResults) => {
        return Promise.all(
          searchResults.map((supplier) =>
            transformSupplierSearchToSupplierGoodsBlockProps(supplier.data)
          )
        );
      })
      .then((supplierWithGoodsProps) => {
        const tagToResults: [string, SupplierAndGoodsBlockProps[]][] =
          supplierWithGoodsProps
            .filter((res) => !!res.length)
            .map((res, index) => {
              return [(tags || [])[index]?.tag_name || "", res];
            });
        setResultsByTag([...tagToResults]);
      });
  };

  const defaultSearch = () => {
    const transformedSupplierGoods: SupplierAndGoodsBlockProps[] = [];
    searchByGoods({
      category_id: categoryId ? [categoryId] : undefined,
    })
      .then((res) => res.data)
      .then(transformSupplierSearchToSupplierGoodsBlockProps)
      .then((supplierBlockProps) =>
        transformedSupplierGoods.push(...supplierBlockProps)
      )
      .then(() => setDefaultSerachResults([...transformedSupplierGoods]));
  };

  return searchByTagsMode ? (
    <div>
      {resultsByTag.length ? (
        resultsByTag.map((result, indx) => (
          <SuppliersWithTag
            key={indx}
            tagName={result[0]}
            suppliers={result[1]}
          />
        ))
      ) : (
        <SearchEmptyTemplate />
      )}
    </div>
  ) : (
    <div className="flex flex-col gap-5 py-5">
      {defaultSearchResults.length ? (
        defaultSearchResults.map((supplierProps) => (
          <SupplierAndGoodsBlock {...supplierProps} />
        ))
      ) : (
        <SearchEmptyTemplate />
      )}
    </div>
  );
}

export const transformSupplierSearchToSupplierGoodsBlockProps = (
  suppliers: SupplierWithGoods[]
) => {
  const supplierBlockPropsPromises = suppliers.map((supplierData) => {
    const transfromedItem: SupplierAndGoodsBlockProps = {
      id: supplierData.supplier_id,
      name: supplierData.supplier_name,
      goods: [],
    };
    return transformGoodsToCardsWithPics(supplierData.goods)
      .then((goods) => transfromedItem.goods.push(...goods))
      .then(() => transfromedItem);
  });
  return Promise.all(supplierBlockPropsPromises);
};

export const transformGoodsToCardsWithPics = (goods: GoodBase[]) =>
  Promise.all(goods.map((item) => getProductPicture(item.id, true))).then(
    (goodsPics) => {
      const transformedGoods: SmallGoodsCardProps[] = goods.map(
        ({ id, name, price, volume }, indx) => ({
          id,
          price,
          title: name,
          weight: volume,
          editMode: false,
          imageUrl: goodsPics[indx] || "",
        })
      );

      return transformedGoods;
    }
  );
