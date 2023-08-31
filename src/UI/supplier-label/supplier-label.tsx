import { useNavigate } from "react-router-dom";

type SupplierLabelProps = {
  logoSrc: string;
  supplierName: string;
  supplierId: string;
  small?: boolean;
  transparent?: boolean;
};

export default function SupplierLabel({
  logoSrc,
  supplierName,
  supplierId,
  small,
  transparent,
}: SupplierLabelProps) {
  const navigate = useNavigate();
  const backgroundColor = transparent ? "bg-[#FFFFFF80]" : "bg-basic-1";
  const height = small ? "h-7" : "h-10";

  return (
    <div
      onClick={() => navigate("/supplier/")}
      className={`flex ${height} w-fit items-center rounded-3xl ${backgroundColor}`}
    >
      <img
        className="h-full rounded-full"
        src={logoSrc}
        alt="Логотип поставщика"
      />
      <span className="pl-2 pr-4">{supplierName}</span>
    </div>
  );
}
