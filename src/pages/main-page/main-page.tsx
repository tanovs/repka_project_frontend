import { Outlet, createSearchParams, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { MainFilters } from "../../modules/main-filters";
import { SearchBar, SearchForEntities } from "../../components/search-bar";

export function MainPage() {
  const [filtersVisible, setFiltersVisibility] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const searchEntityType = useRef(SearchForEntities.Goods);
  const navigate = useNavigate();

  function setSearchUrl(searchTerm: string): void {
    const searchParams = createSearchParams([
      ["type", searchEntityType.current],
      ["searchTerm", searchTerm],
    ]);
    navigate(`/search?${searchParams.toString()}`);
  }

  return (
    <>
      <div className="relative h-[100vh] w-full overflow-x-hidden bg-basic-1">
        <SearchBar
          onSearchFocus={(isFocused) => setSearchFocused(isFocused)}
          onSearchInputChange={(input) => setSearchUrl(input)}
          onFiltersButtonClick={() => setFiltersVisibility(true)}
          chooseSearchType={(type) => (searchEntityType.current = type)}
        />
        <MainFilters
          visible={filtersVisible}
          setVisibility={setFiltersVisibility}
        />
        <div className={`${searchFocused && "hidden"}`}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
