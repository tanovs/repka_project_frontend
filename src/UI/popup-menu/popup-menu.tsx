import React from "react";

export type PopupMenuProps = {
  items: { id: string; text: string; iconTemplate: React.ReactNode }[];
  visible: boolean;
  children?: React.ReactNode;
  onChoose: (chosenId: string) => void;
};

export function PopupMenu({
  items,
  onChoose,
  children,
  visible,
}: PopupMenuProps) {
  const itemTemplate = (id: string, text: string, icon: React.ReactNode) => (
    <div
      onClick={() => onChoose(id)}
      key={id}
      className="flex w-full items-center justify-between border-b-[0.5px] border-r-text-0 bg-basic-0 p-3 text-b2_m text-text-3 last:border-0"
    >
      {text} {icon}
    </div>
  );
  return (
    <div className="relative">
      <div
        className={`${
          !visible && "hidden"
        } absolute left-0 top-7 flex w-64 flex-col justify-center overflow-hidden rounded-lg drop-shadow-lg`}
      >
        {items.map(({ id, text, iconTemplate }) =>
          itemTemplate(id, text, iconTemplate)
        )}
      </div>
      {children}
    </div>
  );
}
