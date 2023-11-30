import { useNavigate } from "react-router-dom";
import ChipsWrapped from "../../UI/chips-wrapped/chips-wrapped";
import { HeaderWithButtons } from "../../UI/header-with-back-button/header-with-back-button";
import { Tag } from "../../shared/models/tag.model";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { useEffect, useRef, useState } from "react";
import { ClickableChip } from "../../UI/clickable-chip/clickable-chip";

export type HeaderTagsType = {
  headerTitle: string;
  tags: Tag[];
  tagsIdSelected: string[];
  onSelectedTagsChange: (tagIds: string[]) => void;
};

export function HeaderTags({
  headerTitle,
  tags,
  tagsIdSelected,
  onSelectedTagsChange,
}: HeaderTagsType) {
  const navigate = useNavigate();
  const [tagChips, setTagChips] = useState<JSX.Element[]>([]);
  const chosenTagsArr = useRef<string[]>(tagsIdSelected);

  const onTagSelect = (selected: boolean, tagId: string) => {
    if (selected) {
      chosenTagsArr.current.push(tagId);
    } else {
      const indexToDelete = chosenTagsArr.current.indexOf(tagId);
      indexToDelete !== -1 && chosenTagsArr.current.splice(indexToDelete, 1);
    }
    onSelectedTagsChange(chosenTagsArr.current);
  };

  useEffect(() => {
    const initialisedTags = tags.map((tag, indx) => {
      const selected = tagsIdSelected.includes(tag.id);

      return (
        <ClickableChip
          key={indx}
          text={tag.tag_name}
          initialState={selected ? "primary" : "secondary"}
          stateChange={(selected) => onTagSelect(selected, tag.id)}
        />
      );
    });
    setTagChips(initialisedTags);
  }, [tags]);

  return (
    <div className="mb-3 rounded-b-2xl bg-basic-0 pb-5 pt-1">
      <HeaderWithButtons
        className="mb-4"
        title={headerTitle}
        onLeftButtonClick={() => navigate(-1)}
        onRightButtonClick={() => navigate("/search")}
      >
        <SearchIcon className="rotate-90" />
      </HeaderWithButtons>
      <ChipsWrapped className="px-5">{tagChips}</ChipsWrapped>
    </div>
  );
}
