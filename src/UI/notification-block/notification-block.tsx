import { useState } from "react";
import { ButtonIcon } from "../button-icon/button-icon";
import { ReactComponent as CrossIcon } from "../../assets/icons/cross.svg";

export type NotificationBlockProps = {
  text: string;
  color: "accent" | "warning" | "info";
  onClose?: () => void;
};

export function NotificationBlock({
  color,
  text,
  onClose,
}: NotificationBlockProps) {
  const [notificationColorFrom, notificationColorTo] =
    getNotificationColor(color);
  const colorClasses = `${"from-[" + notificationColorFrom + "]"} ${
    "to-[" + notificationColorTo + "]"
  }`;
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
      className={`rounded-2xl ${colorClasses} relative bg-gradient-to-l  px-5 py-3 text-b4_m`}
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
  color: NotificationBlockProps["color"]
): string[] {
  switch (color) {
    case "accent":
      return ["#FFF4E4", "#FDD835"];
    case "warning":
      return ["#FFF4E4", "#F930000"];
    case "info":
      return ["#FFF4E4", "#76CF2F"];
  }
}
