import { useLocation } from "react-router-dom";
import { ReactComponent as RepkaTitleIcon } from "../../assets/icons/repka-title.svg";
import { useEffect, useState } from "react";

export default function RepkaHeader() {
  const [headerVisibility, setHeaderVisibility] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const isOnMainPage = document.location.pathname === "/";
    setHeaderVisibility(isOnMainPage);
  }, [location]);

  return (
    <div
      className={
        headerVisibility
          ? "relative h-12 bg-basic-1 transition-all"
          : "relative h-0 bg-basic-1 transition-all"
      }
    >
      <div className="w-full bg-[#F4F4F4]">
        <RepkaTitleIcon className="absolute bottom-2 left-5" />
      </div>
    </div>
  );
}
