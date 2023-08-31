import { useState } from "react";
import Chip, { ChipProps } from "../../UI/chip/chip";
import ChipsWrapped from "../../UI/chips-wrapped/chips-wrapped";
import { HeaderWithButtons } from "../../UI/header-with-back-button/header-with-back-button";
import SmallGoodsCard from "../../UI/small-goods-card/small-goods-card";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

export default function ProductListPage() {
  const categoryChips = [
    "Молоко",
    "Сыр",
    "Йогурт",
    "Творог",
    "Кефир",
    "Сметана",
  ].map((category, indx) => {
    const [chipState, setChipState] = useState<ChipProps["state"]>("secondary");

    return (
      <Chip
        key={indx}
        text={category}
        state={chipState}
        onClick={() =>
          setChipState(chipState === "secondary" ? "primary" : "secondary")
        }
      />
    );
  });

  const supplierGoods = [
    {
      id: "1",
      editMode: false,
      imageUrl: "../src/assets/images/meat-4.png",
      price: "440",
      title: "Окорок свинина",
      weight: "3 кг",
    },
    {
      id: "2",
      editMode: false,
      imageUrl: "../src/assets/images/meat-5.png",
      price: "440",
      title: "Куриное филе, разделанное",
      weight: "3 кг",
    },
    {
      id: "3",
      editMode: false,
      imageUrl: "../src/assets/images/meat-6.png",
      price: "440",
      title: "Отбивная, свинина",
      weight: "3 кг",
    },
  ];

  return (
    <div>
      <div className="mb-3 rounded-b-2xl bg-basic-0 pb-5">
        <HeaderWithButtons
          className="mb-4"
          title="Товары поставщика"
          onLeftButtonClick={() => {}}
          onRightButtonClick={() => {}}
        >
          <SearchIcon className="rotate-90" />
        </HeaderWithButtons>
        <ChipsWrapped className="px-5">{categoryChips}</ChipsWrapped>
      </div>
      <div className="rounded-2xl bg-basic-0 p-5">
        <div className="mb-5 mt-2 text-h2_m text-text-3">Сыр</div>
        <div className="grid grid-cols-3 gap-3">
          {supplierGoods.map((goodProps) => (
            <SmallGoodsCard {...goodProps} key={goodProps.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
