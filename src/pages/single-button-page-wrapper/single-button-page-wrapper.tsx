import { HeaderWithButtons } from "../../UI/header-with-back-button/header-with-back-button";
import WideButton from "../../UI/wide-button/wide-button";

export type SingleButtonPageWrapperProps = {
  title: string;
  buttonText: string;
  primaryText?: string;
  secondaryText?: string;
  onBackButtonClick?: () => void;
  onMainButtonClick: () => void;
  children: React.ReactNode;
};

export default function SingleButtonPageWrapper({
  title,
  children,
  buttonText,
  primaryText,
  secondaryText,
  onBackButtonClick,
  onMainButtonClick,
}: SingleButtonPageWrapperProps) {
  return (
    <div className="absolute top-0 h-full w-full bg-extra-2">
      <div className="mt-beforeContent">
        <HeaderWithButtons
          title={title}
          light
          onLeftButtonClick={onBackButtonClick}
        />
        <div className="mx-5 flex flex-col items-center">
          {children}
          {primaryText && (
            <div className="mb-2 text-center text-h2_m text-basic-0">
              {primaryText}
            </div>
          )}
          {secondaryText && (
            <div className="text-center text-b3_m text-basic-0">
              {secondaryText}
            </div>
          )}
          <WideButton
            className="absolute bottom-8 w-10/12"
            primaryText={buttonText}
            color="primary"
            onClick={onMainButtonClick}
          />
        </div>
      </div>
    </div>
  );
}
