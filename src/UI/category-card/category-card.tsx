import { useState } from "react";
import { ReactComponent as SchevronLogo } from "../../../assets/icons/schevron.svg";
import { useNavigate } from "react-router-dom";

export type CategoryCardProps = {
  title: string;
  url: string;
  iconUrl: string;
  // children: React.ReactNode;
};

export default function CategoryCard({
  title,
  url,
  iconUrl,
}: // children,
CategoryCardProps) {
  const navigate = useNavigate();

  return (
    <div
      className="relative h-24 min-w-[6.5rem] overflow-hidden rounded-2xl bg-basic-2 p-3 text-start text-b4_m text-text-3"
      onClick={() => navigate(url)}
    >
      {title}
      <div className="absolute -bottom-1 -right-2">
        <img src={iconUrl} alt="Изображение категории" />
        {/* {children} */}
      </div>
    </div>
  );
}
