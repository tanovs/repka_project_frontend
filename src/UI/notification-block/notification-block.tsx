import { useState } from "react";
import { ButtonIcon } from "../button-icon/button-icon";
import { ReactComponent as CrossIcon } from "../../assets/icons/cross.svg";

export type NotificationBlockProps = {
  text: string;
  className?: string;
  color: "accent" | "warning" | "info" | "secondary";
  onClose?: () => void;
};

export function NotificationBlock({
  color,
  text,
  className,
  onClose,
}: NotificationBlockProps) {
  const [notificationColorFrom, notificationColorTo] =
    getNotificationColor(color);
  const colorClasses = `${notificationColorFrom} ${notificationColorTo} bg-gradient-to-l`;
  const [visible, setVisibility] = useState(true);
  const onNotificationClose = () => {
    setVisibility(false);
    onClose && onClose();
  };

  if (!visible) {
    return <></>;
  }

  return (
    <div
      className={
        `${className || ""} relative rounded-2xl  px-5 py-3 text-b4_m ` +
        colorClasses
      }
    >
      <div className="absolute right-2 top-2">
        <ButtonIcon onClick={onNotificationClose}>
          <CrossIcon className="h-4 w-4" />
        </ButtonIcon>
      </div>
      {text}
    </div>
  );
}

function getNotificationColor(
  color: NotificationBlockProps["color"],
): string[] {
  switch (color) {
    case "accent":
      return ["from-[#FFF4E4]", "to-[#FDD835]"];
    case "warning":
      return ["from-[#FFF4E4]", "to-[#F930000]"];
    case "info":
      return ["from-[#FFF4E4]", "to-[#76CF2F]"];
    case "secondary":
      return ["from-[#EAEAEA]", "to-[#EAEAEA]"];
  }
}
