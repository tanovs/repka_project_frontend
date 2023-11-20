import { useState, useEffect, useRef } from "react";
import {
  useNavigate,
  createSearchParams,
  useSearchParams,
} from "react-router-dom";
import { SearchBar, SearchForEntities } from "../../components/search-bar";

export type SearchProps = {
  onSetFiltersVisibility: (visibility: boolean) => void;
};

export const searchTypeParam = "type";
export const searchTermParam = "searchTerm";

export function Search({ onSetFiltersVisibility }: SearchProps) {
  const [searchEntityType, setSearchEntityType] = useState<SearchForEntities>(
    SearchForEntities.Goods
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const urlToGetBack = useRef("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const search = (): void => {
    if (!searchTerm) {
      return;
    }
    const searchParams = createSearchParams([
      [searchTypeParam, searchEntityType],
      [searchTermParam, searchTerm],
    ]);
    navigate(`/search?${searchParams.toString()}`, {
      replace: true,
    });
  };

  const cancelSearch = () => {
    const backUrl = urlToGetBack.current;
    urlToGetBack.current = "";
    setSearchEntityType(SearchForEntities.Everything);
    setSearchTerm("");
    setSearchActive(false);
    navigate(backUrl);
  };

  const initialiseSearch = () => {
    const type = searchParams.get(searchTypeParam);
    const term = searchParams.get(searchTermParam);
    if (!(type && term)) {
      // navigate("");
      return;
    }
    setSearchActive(true);
    setSearchEntityType(type as SearchForEntities);
    setSearchTerm(term);
  };

  useEffect(search, [searchTerm, searchEntityType]);
  useEffect(initialiseSearch, []);

  const onSearchTermChange = (inputSearchTerm: string) => {
    setSearchTerm(inputSearchTerm);
  };

  const onSearchEntityChange = (entity: SearchForEntities) => {
    setSearchEntityType(entity);
  };

  const searchFocus = () => {
    memorizeBackUrl();
    setSearchActive(true);
  };

  const memorizeBackUrl = () => {
    if (!urlToGetBack.current) {
      urlToGetBack.current = document.location.pathname;
    }
  };

  return (
    <SearchBar
      searchValue={searchTerm}
      searchActive={searchActive}
      onSearchFocus={searchFocus}
      onSearchInputChange={onSearchTermChange}
      onFiltersButtonClick={() => onSetFiltersVisibility(true)}
      chooseSearchType={onSearchEntityChange}
      onCancelSearch={cancelSearch}
    />
  );
}
