import { useNavigate } from "react-router-dom";
import { ButtonIcon } from "../../UI/button-icon/button-icon";
import SmallGoodsCard from "../../UI/small-goods-card/small-goods-card";
import { SmallGoodsCardProps } from "../../UI/small-goods-card/small-goods-card";
import { ReactComponent as ChevronIcon } from "../../assets/icons/schevron.svg";

export type SupplierWithGoodsProps = {
  id: string;
  name: string;
  goods: SmallGoodsCardProps[];
};

export function SupplierWithGoods({
  id: supplierId,
  name: supplierName,
  goods: supplierGoods,
}: SupplierWithGoodsProps) {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <div
          className="flex h-12 items-center justify-between text-start text-b1_m text-text-3"
          onClick={() => navigate(`/supplier/${supplierId}/products`)}
        >
          {supplierName}
          <ButtonIcon hasBackground={true}>
            <ChevronIcon className="-rotate-90"></ChevronIcon>
          </ButtonIcon>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {supplierGoods.map((goodProps) => (
            <SmallGoodsCard {...goodProps} key={goodProps.id} />
          ))}
        </div>
      </div>
    </>
  );
}
