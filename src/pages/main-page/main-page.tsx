import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import WideButton from "../../UI/wide-button/wide-button";
import RepkaHeader from "../../components/repka-header/repka-header";
import { MainFilters } from "../../modules/main-filters";

export function MainPage() {
  const [filtersVisible, setFiltersVisibility] = useState(false);
  const [pathName, setPathName] = useState<string | undefined>();
  const navigate = useNavigate();
  useEffect(() => {
    const path = window.location.pathname;
    if (path === "" || path === "/") {
      setPathName(undefined);
    } else {
      setPathName(path);
    }
  }, [window.location.pathname]);

  return (
    <>
      <div className="relative -mb-[66px] h-screen max-h-[100vh] w-full overflow-auto bg-basic-0">
        <RepkaHeader />
        {/* <Search onSetFiltersVisibility={setFiltersVisibility} /> */}
        <div className="h-3"></div>
        <MainFilters
          visible={filtersVisible}
          setVisibility={setFiltersVisibility}
        />
        {/* <div className={`${searchFocused && "hidden"}`}> */}
        <div>
          <Outlet />
        </div>
      </div>
      {!pathName && (
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
      )}
    </>
  );
}
