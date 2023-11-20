import { useState } from "react";
import { ReactComponent as SchevronLogo } from "../../assets/icons/schevron.svg";
import { Outlet } from "react-router-dom";

export default function CartPage() {
  return (
    <div className="w-full bg-[#F4F4F4] pt-[50px]">
      <Outlet />
    </div>
  );
}
