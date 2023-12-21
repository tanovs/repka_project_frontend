import SmallGoodsCard, {
  SmallGoodsCardProps,
} from "@/UI/small-goods-card/small-goods-card";

export type SmallGoodsCardsBlockProps = {
  goods: SmallGoodsCardProps[];
};

export function SmallGoodsCardsBlock({ goods }: SmallGoodsCardsBlockProps) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {goods.map((goodProps) => (
        <SmallGoodsCard {...goodProps} key={goodProps.id} />
      ))}
    </div>
  );
}
