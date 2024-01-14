import { ReactComponent as ClockIcon } from "../../assets/icons/clock.svg";
import { ReactComponent as RubleIcon } from "../../assets/icons/ruble.svg";
import { SupplierImageBlockProps } from "../../components/supplier-image-block";
import SupplierImageBlock from "../../components/supplier-image-block";
import FoldingBlock from "../../UI/folding-block/folding-block";
import { ReadonlyField } from "../../UI/readonly-field/readonly-field";
import Chip from "../../UI/chip/chip";
import { useNavigate } from "react-router-dom";
import { SupplierFullData } from "@/shared/models/supplier.model";

export type SupplierInfoProps = {
  imageUrl: string;
  logoUrl: string;
  supplierData: SupplierFullData;
};

export function SupplierInfo({
  imageUrl,
  logoUrl,
  supplierData,
}: SupplierInfoProps) {
  const navigate = useNavigate();
  const supplierImage: SupplierImageBlockProps = {
    imageUrl,
    logoUrl,
    onBackButtonClick: () => navigate(-1),
    // onSearchButtonClick: () => navigate("/search"),
  };
  const { contacts, deliveryInfo, documents, titleAndWorkingHours } =
    supplierData;

  return (
    <div className="w-full overflow-hidden rounded-b-2xl bg-basic-0 text-start">
      <SupplierImageBlock {...supplierImage}></SupplierImageBlock>
      <div className="mx-5 my-2 text-h1_m text-text-3">
        {titleAndWorkingHours?.company_name || "Неизвестно"}
      </div>
      <div className="mx-5 my-2  text-b3_m text-text-3">
        {titleAndWorkingHours?.orders_day_time || "Неизвестно"}
      </div>
      {contacts && (
        <FoldingBlock title="Контакты">
          {contacts.contact_name && (
            <ReadonlyField label="Контактное лицо">
              {contacts.contact_name}
            </ReadonlyField>
          )}
          {contacts.company_adress && (
            <ReadonlyField label="Адрес поставщика">
              {contacts.company_adress}
            </ReadonlyField>
          )}
          {contacts.phone_number && (
            <ReadonlyField label="Номер">{contacts.phone_number}</ReadonlyField>
          )}
          {contacts.email && (
            <ReadonlyField label="Почтовый адрес">
              {contacts.email}
            </ReadonlyField>
          )}
          {contacts.website && (
            <ReadonlyField label="Сайт">{contacts.website}</ReadonlyField>
          )}
        </FoldingBlock>
      )}
      {deliveryInfo && (
        <FoldingBlock title="О доставке">
          {deliveryInfo.city_name?.length && (
            <ReadonlyField label="Куда доставляют">
              <div className="flex h-auto items-center overflow-x-auto">
                {deliveryInfo.city_name.map((cityName) => (
                  <Chip text={cityName} state="outline" />
                ))}
              </div>
            </ReadonlyField>
          )}
          {deliveryInfo.delivery_day_time && (
            <ReadonlyField
              label="Когда доставляют"
              iconContainer={<ClockIcon />}
            >
              {deliveryInfo.delivery_day_time}
            </ReadonlyField>
          )}
          {deliveryInfo.min_price && (
            <ReadonlyField
              label="Минимальная цена заказа"
              iconContainer={<RubleIcon />}
            >
              {deliveryInfo.min_price}
            </ReadonlyField>
          )}
          {deliveryInfo.estimated_delivery_time && (
            <ReadonlyField label="Срок доставки" iconContainer={<ClockIcon />}>
              {deliveryInfo.estimated_delivery_time}
            </ReadonlyField>
          )}
        </FoldingBlock>
      )}
      {documents && (
        <FoldingBlock title="Документы">
          {documents.ooo && (
            <ReadonlyField label="ООО / ИП">{documents.ooo}</ReadonlyField>
          )}
          {documents.ogrn && (
            <ReadonlyField label="ОГРН">1234509876543298</ReadonlyField>
          )}
          {documents.inn && (
            <ReadonlyField label="ИНН">{documents.inn}</ReadonlyField>
          )}
        </FoldingBlock>
      )}
    </div>
  );
}
