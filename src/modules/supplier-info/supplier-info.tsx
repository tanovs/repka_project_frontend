import { ReactComponent as ClockIcon } from "../../assets/icons/clock.svg";
import { ReactComponent as RubleIcon } from "../../assets/icons/ruble.svg";
import { SupplierImageBlockProps } from "../../components/supplier-image-block";
import SupplierImageBlock from "../../components/supplier-image-block";
import FoldingBlock from "../../UI/folding-block/folding-block";
import { ReadonlyField } from "../../UI/readonly-field/readonly-field";
import Chip from "../../UI/chip/chip";
import { useNavigate } from "react-router-dom";

export type SupplierInfoProps = {
  id: string;
};

export function SupplierInfo({ id: supplierId }: SupplierInfoProps) {
  const supplierImage: SupplierImageBlockProps = {
    imageUrl: "../src/assets/images/card-background.png",
    logoUrl: "../src/assets/images/supplier-logo.png",
    onBackButtonClick: () => navigate(-1),
    onSearchButtonClick: () => navigate("/search"),
  };

  const navigate = useNavigate();

  return (
    <div className="w-full overflow-hidden rounded-b-2xl bg-basic-0 text-start">
      <SupplierImageBlock {...supplierImage}></SupplierImageBlock>
      <div className="mx-5 my-2 text-h1_m text-text-3">Karelia_Vegetarian</div>
      <div className="mx-5 my-2  text-b3_m text-text-3">
        Заказы принимаются с 10 утра до 7 вечера пн-пт
      </div>
      <FoldingBlock title="Контакты">
        <ReadonlyField label="Контактное лицо">Андрей Андреевич</ReadonlyField>
        <ReadonlyField label="Адрес поставщика">
          г. Москва, ул. Новокрестовская, 17 к.1
        </ReadonlyField>
        <ReadonlyField label="Номер">+7 (954) 656-16-17</ReadonlyField>
        <ReadonlyField label="Почтовый адрес">Email@gmail.com</ReadonlyField>
        <ReadonlyField label="Сайт">Nice_Growfood.ru</ReadonlyField>
      </FoldingBlock>
      <FoldingBlock title="О доставке">
        <ReadonlyField label="Куда доставляют">
          <div className="flex h-auto items-center overflow-x-auto">
            <Chip text="Москва" state="outline" />
            <Chip text="Санкт-Петербург" state="outline" />
            <Chip text="Новосибирск" state="outline" />
            <Chip text="Усть-Каменск" state="outline" />
          </div>
        </ReadonlyField>
        <ReadonlyField label="Когда доставляют" iconContainer={<ClockIcon />}>
          Понедельник – пятница с 5 до 11 утра
        </ReadonlyField>
        <ReadonlyField
          label="Минимальная цена заказа"
          iconContainer={<RubleIcon />}
        >
          от 5000 рублей
        </ReadonlyField>
        <ReadonlyField label="Срок доставки" iconContainer={<ClockIcon />}>
          1 – 2 дня
        </ReadonlyField>
      </FoldingBlock>
      <FoldingBlock title="Документы">
        <ReadonlyField label="ООО / ИП">12345678908765</ReadonlyField>
        <ReadonlyField label="ОГРН">1234509876543298</ReadonlyField>
        <ReadonlyField label="ИНН">0987654</ReadonlyField>
        <ReadonlyField label="Почтовый адрес">Email@gmail.com</ReadonlyField>
        <ReadonlyField label="Сайт">Nice_Growfood.ru</ReadonlyField>
      </FoldingBlock>
    </div>
  );
}
