import { getSupplierGoodByTag } from "@/shared/api/supplier";
import { GoodBase } from "@/shared/models/good.model";
import { TagBase } from "@/shared/models/tag.model";
import { useEffect, useState } from "react";
import { transformGoodsToCardsWithPics } from "../supplier-with-goods-search/supplier-with-goods-search";
import { SmallGoodsCardProps } from "@/UI/small-goods-card/small-goods-card";
import { SmallGoodsCardsBlock } from "@/components/small-goods-cards-block/small-goods-cards-block";
import { SearchEmptyTemplate } from "@/UI/search-empty-template/search-empty-template";

export type GoodsSearchProps = {
  supplierId?: string;
  tags: TagBase[];
};

export function GoodsSearch({ supplierId, tags }: GoodsSearchProps) {
  const [searchByTagsMode, setSearchByTags] = useState(!!tags?.length);
  const [resultsByTag, setResultsByTag] = useState<
    [string, SmallGoodsCardProps[]][]
  >([]);
  const [defaultSearchResults, setDefaultSerachResults] = useState<
    SmallGoodsCardProps[]
  >([]);

  if (!supplierId) {
    throw Error("Supplier id not defined!");
  }

  useEffect(() => {
    const isTagsAvailable = !!tags?.length;
    isTagsAvailable ? searchByTags() : defaultSearch();
    setSearchByTags(isTagsAvailable);
  }, [JSON.stringify(tags)]);

  const searchByTags = () => {
    const searches = tags.map((tag) =>
      getSupplierGoodByTag(supplierId, [tag.id])
    );

    Promise.all(searches)
      .then((data) =>
        Promise.all(
          data.map((goodResult) =>
            transformGoodsToCardsWithPics(goodResult.data)
          )
        )
      )
      .then((searchResults) => {
        const tagToResults: [string, SmallGoodsCardProps[]][] = searchResults
          .filter((res) => !!res.length)
          .map((res, index) => {
            return [tags[index]?.tag_name || "", res];
          });
        setResultsByTag([...tagToResults]);
      });
  };

  const defaultSearch = () => {
    getSupplierGoodByTag(supplierId, [])
      .then((res) => res.data)
      .then(transformGoodsToCardsWithPics)
      .then(setDefaultSerachResults);
  };

  return searchByTagsMode ? (
    <>
      {resultsByTag.length ? (
        resultsByTag.map((result, indx) => (
          <div key={indx}>
            <div className="mb-5 pt-6 text-h2_m text-text-3">{result[0]}</div>
            <SmallGoodsCardsBlock goods={result[1]} />
          </div>
        ))
      ) : (
        <SearchEmptyTemplate />
      )}
    </>
  ) : (
    <div>
      {defaultSearchResults.length ? (
        <SmallGoodsCardsBlock goods={defaultSearchResults} />
      ) : (
        <SearchEmptyTemplate />
      )}
    </div>
  );
}
