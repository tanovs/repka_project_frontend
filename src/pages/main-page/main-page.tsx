import { Outlet } from "react-router-dom";
import { useState } from "react";
import { MainFilters } from "../../modules/main-filters";
import { Search } from "../../modules/search/search";
import RepkaHeader from "../../components/repka-header/repka-header";

export function MainPage() {
  const [filtersVisible, setFiltersVisibility] = useState(false);

  return (
    <>
      <div className="relative h-[100vh] w-full overflow-x-hidden bg-basic-1">
        <RepkaHeader />
        <Search onSetFiltersVisibility={setFiltersVisibility} />
        <MainFilters
          visible={filtersVisible}
          setVisibility={setFiltersVisibility}
        />
        {/* <div className={`${searchFocused && "hidden"}`}> */}
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
