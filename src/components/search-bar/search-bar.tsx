import { useState } from "react";
import { ButtonIcon } from "../../UI/button-icon/button-icon";
import { ButtonText } from "../../UI/button-text/button-text";
import { PopupMenu } from "../../UI/popup-menu/popup-menu";
import SearchInput from "../../UI/search-input/search-input";
import { ReactComponent as PreferencesIcon } from "../../assets/icons/preferences.svg";
import { ReactComponent as AppleIcon } from "../../assets/icons/apple.svg";
import { ReactComponent as StoreIcon } from "../../assets/icons/store.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

export type SearchBarProps = {
  onSearchFocus: (isFocus: boolean) => void;
  onSearchInputChange: (searchTerm: string) => void;
  onFiltersButtonClick: () => void;
  chooseSearchType: (type: SearchForEntities) => void;
};

export enum SearchForEntities {
  Goods = "good",
  Suppliers = "supplier",
  Everything = "all",
}

export default function SearchBar({
  onSearchFocus,
  onSearchInputChange,
  onFiltersButtonClick,
  chooseSearchType,
}: SearchBarProps) {
  const [searchFocused, setSearchFocused] = useState(false);
  const [popupMenuVisible, setPopupMenuVisible] = useState(false);

  const focusSearch = (isFocus: boolean): void => {
    onSearchFocus(isFocus);
    setSearchFocused(isFocus);
  };

  function onSearchTypeChoose(typeId: string): void {
    setPopupMenuVisible(false);
    chooseSearchType(typeId as SearchForEntities);
  }

  const popupMenuItems = [
    {
      iconTemplate: <AppleIcon className="h-5 text-text-0"></AppleIcon>,
      id: SearchForEntities.Goods,
      text: "Поиск по товарам",
    },
    {
      iconTemplate: <StoreIcon className="h-5 text-text-0"></StoreIcon>,
      id: SearchForEntities.Suppliers,
      text: "Поиск по поставщикам",
    },
    {
      iconTemplate: <SearchIcon className="h-5 text-text-0"></SearchIcon>,
      id: SearchForEntities.Everything,
      text: "Поиск по всему",
    },
  ];

  return (
    <div className="search-block sticky top-0 z-[1] flex w-full items-center bg-basic-0 p-5">
      {searchFocused && (
        <PopupMenu
          visible={popupMenuVisible}
          items={popupMenuItems}
          onChoose={onSearchTypeChoose}
        >
          <ButtonIcon
            onClick={() => {
              setPopupMenuVisible(!popupMenuVisible);
            }}
            hasBackground={false}
          >
            <PreferencesIcon className="h-5 text-text-0"></PreferencesIcon>
          </ButtonIcon>
        </PopupMenu>
      )}
      <SearchInput
        onFocus={() => focusSearch(true)}
        onChange={onSearchInputChange}
      />

      {searchFocused ? (
        <div className="ml-1">
          <ButtonText onClick={() => focusSearch(false)} text="Отменить" />
        </div>
      ) : (
        <ButtonIcon
          onClick={() => onFiltersButtonClick()}
          hasBackground={false}
        >
          <PreferencesIcon className="h-5 text-text-0"></PreferencesIcon>
        </ButtonIcon>
      )}
    </div>
  );
}
