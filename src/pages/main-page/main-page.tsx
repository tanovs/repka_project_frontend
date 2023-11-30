import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { MainFilters } from "../../modules/main-filters";
import { Search } from "../../modules/search/search";
import RepkaHeader from "../../components/repka-header/repka-header";
import WideButton from "../../UI/wide-button/wide-button";

export function MainPage() {
  const [filtersVisible, setFiltersVisibility] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="relative max-h-[100vh] w-full bg-basic-0">
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
        <div className="sticky bottom-0 w-full px-5 pb-4">
          <WideButton
            className="bg-[#FFFFFFF2] shadow-upper"
            primaryText="Стать поставщиком"
            onClick={() =>
              (window.location.href =
                "https://forms.yandex.ru/cloud/6564e20369387276b61d8225/")
            }
          />
        </div>
      </div>
    </>
  );
}
