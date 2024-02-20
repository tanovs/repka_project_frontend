import { useNavigate } from "react-router-dom";
import { ReactComponent as ClockLogo } from "../../assets/icons/clock.svg";
import { ReactComponent as HeartLogo } from "../../assets/icons/heart.svg";

export type SupplierCardProps = {
  id: string;
  email?: string;
  companyName: string;
  companyLogo?: string;
  companyImage?: string;
  daysToSupply: string;
  minPrice: string;
};

export default function SupplierCard({
  id,
  email,
  companyName,
  companyLogo,
  companyImage,
  daysToSupply,
  minPrice,
}: SupplierCardProps) {
  const navigate = useNavigate();

  return (
    <div className="w-full" onClick={() => navigate(`/supplier/${id}`)}>
      <div
        style={{ backgroundImage: `url('${companyImage || ""}')` }}
        className={`relative h-40 w-full rounded-2xl bg-cover bg-center bg-no-repeat`}
      >
        <img
          className="absolute left-3 top-3 h-10 w-10 rounded-full"
          src={companyLogo || ""}
          alt="Логотип поставщика"
        />
        {/* <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-transparent-logo text-text-2">
          <HeartLogo className="h-4" />
        </div> */}
        {email && (
          <div className="absolute bottom-3 right-3 flex items-center rounded-full bg-transparent-logo px-3 py-1 text-text-3">
            {email}
          </div>
        )}
      </div>
      <div>
        <div className="w-full text-start text-h2_m text-text-3">
          {companyName}
        </div>
        <div className="text-start text-b3_m text-text-1">
          <span className="inline-flex items-center">
            <ClockLogo className="inline-block h-3 w-3 align-middle" />
            &nbsp;{daysToSupply} •&nbsp;
          </span>
          <span>{minPrice} ₽ мин. сумма заказа</span>
        </div>
      </div>
    </div>
  );
}
