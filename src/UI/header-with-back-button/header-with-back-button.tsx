import { ButtonIcon } from "../button-icon/button-icon";
import { ReactComponent as SchevronIcon } from "../../assets/icons/schevron.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

export type HeaderWithBackButtonProps = {
  title: string;
  light?: boolean;
  className?: string;
  children?: React.ReactNode;
  onRightButtonClick?: () => void;
  onLeftButtonClick?: () => void;
};

export function HeaderWithButtons({
  title,
  light,
  className,
  children,
  onRightButtonClick,
  onLeftButtonClick,
}: HeaderWithBackButtonProps) {
  const textColorClass = light ? "text-basic-0" : "text-text-3";

  return (
    <div
      className={`${
        className || ""
      } mx-5 my-2 flex h-12 items-center justify-between`}
    >
      {onLeftButtonClick ? (
        <ButtonIcon
          hasBackground={!light}
          backgroundColor="light"
          onClick={onLeftButtonClick}
        >
          <SchevronIcon className={`rotate-90 ${textColorClass}`} />
        </ButtonIcon>
      ) : (
        <div className="h-8 w-8"></div>
      )}
      <div className={`text-b1_m ${textColorClass}`}>{title}</div>
      {!children ? (
        <div className="h-8 w-8"></div>
      ) : (
        <ButtonIcon
          className={`${textColorClass}`}
          hasBackground={!light}
          backgroundColor="light"
          onClick={onRightButtonClick}
        >
          {children}
          {/* <SearchIcon className={`rotate-90 ${textColorClass}`} /> */}
        </ButtonIcon>
      )}
    </div>
  );
}
