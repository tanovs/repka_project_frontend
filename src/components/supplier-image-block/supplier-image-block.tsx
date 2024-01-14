import { ButtonIcon } from "../../UI/button-icon/button-icon";
import { ReactComponent as ChevronIcon } from "../../assets/icons/schevron.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

export type SupplierImageBlockProps = {
  imageUrl: string;
  logoUrl: string;
  onBackButtonClick: () => void;
  onSearchButtonClick?: () => void;
};

export function SupplierImageBlock({
  imageUrl,
  logoUrl,
  onBackButtonClick,
  onSearchButtonClick,
}: SupplierImageBlockProps) {
  return (
    <div className="relative h-64 w-full">
      <div
        style={{ backgroundImage: `url('${imageUrl}')` }}
        className="relative h-60 w-full rounded-b-2xl bg-cover bg-center bg-no-repeat"
      >
        <div className="mx-5 flex justify-between pt-14">
          <ButtonIcon hasBackground onClick={onBackButtonClick}>
            <ChevronIcon className="rotate-90" />
          </ButtonIcon>
          {onSearchButtonClick && (
            <ButtonIcon hasBackground onClick={onSearchButtonClick}>
              <SearchIcon />
            </ButtonIcon>
          )}
        </div>
        <div
          style={{ backgroundImage: `url('${logoUrl}')` }}
          className="absolute -bottom-6 left-5 h-16 w-16 rounded-full bg-cover bg-center bg-no-repeat"
        ></div>
      </div>
    </div>
  );
}
