import { useNavigate } from "react-router-dom";
import { ReactComponent as PencilLogo } from "../../assets/icons/pencil.svg";

export type SmallGoodsCardProps = {
  id: string;
  editMode: boolean;
  title: string;
  price: string;
  weight: string;
  imageUrl: string;
};

export default function SmallGoodsCard({
  editMode,
  title,
  price,
  weight,
  imageUrl,
}: SmallGoodsCardProps) {
  const navigate = useNavigate();

  return (
    <div
      className="h-40 w-full rounded-2xl bg-basic-0 drop-shadow-md"
      onClick={() => navigate("/product")}
    >
      <div
        style={{ backgroundImage: `url('${imageUrl}')` }}
        className="relative h-20 w-full rounded-t-2xl bg-cover bg-center bg-no-repeat"
      ></div>
      <div>
        <div className="m-1 w-full text-start text-b4_m text-text-2">
          {title}
        </div>
        {editMode ? (
          <div className="mb-3 mr-3 flex h-5 justify-end text-text-3">
            <PencilLogo />
          </div>
        ) : (
          <div className="m-2 flex items-baseline justify-between">
            <span className="text-b5_m text-text-0">{weight}</span>
            <span className="text-b3_m text-text-3">{price} ₽</span>
          </div>
        )}
      </div>
    </div>
  );
}
