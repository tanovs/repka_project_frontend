import { useNavigate } from "react-router-dom";
import { ButtonIcon } from "../../UI/button-icon/button-icon";
import SmallGoodsCard from "../../UI/small-goods-card/small-goods-card";
import { SmallGoodsCardProps } from "../../UI/small-goods-card/small-goods-card";
import { ReactComponent as ChevronIcon } from "../../assets/icons/schevron.svg";
import { SmallGoodsCardsBlock } from "../small-goods-cards-block/small-goods-cards-block";

export type SupplierAndGoodsBlockProps = {
  id: string;
  name: string;
  goods: SmallGoodsCardProps[];
};

export function SupplierAndGoodsBlock({
  id: supplierId,
  name: supplierName,
  goods: supplierGoods,
}: SupplierAndGoodsBlockProps) {
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
        <SmallGoodsCardsBlock goods={supplierGoods} />
      </div>
    </>
  );
}
