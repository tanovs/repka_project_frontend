import { Form, useNavigate } from "react-router-dom";
import { HeaderWithButtons } from "../../UI/header-with-back-button/header-with-back-button";
import InputWithTitle from "../../UI/input-with-title/input-with-title";
import { NotificationBlock } from "../../UI/notification-block/notification-block";
import Chip, { ChipProps } from "../../UI/chip/chip";
import { ReactElement, useState } from "react";
import ChipsWrapped from "../../UI/chips-wrapped/chips-wrapped";
import EntityChipsArea, {
  EntityChipsAreaProps,
} from "./components/entity-chips/entity-chips";
import Toggle from "../../UI/toggle/toggle";
import OrderFixedButton from "../../components/order-fixed-button";

export function Checkout() {
  const navigate = useNavigate();
  const [anotherContact, addAnotherContact] = useState(false);
  const [selfPick, setSelfPick] = useState(false);
  const [payAsPhys, setPayAsPhys] = useState(false);
  const paymentInfo =
    "Оплата поставщику осуществляется по расчетному счёту, который заведёт поставщик. Вы можете выбрать оплатить, как физ. лицо, чтобы рассчитаться за товар при получении без договора!";
  const weekDays: EntityChipsAreaProps["entities"] = [
    "ПН",
    "ВТ",
    "СР",
    "ЧТ",
    "ПТ",
    "СБ",
    "ВС",
  ].map((day, indx) => ({ id: indx.toString(), name: day }));
  const availableTime: EntityChipsAreaProps["entities"] = [
    "5:00 - 6:00",
    "6:00 - 7:00",
    "7:00 - 8:00",
    "8:00 - 9:00",
    "9:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
  ].map((day, indx) => ({ id: indx.toString(), name: day }));

  const supplierAddress =
    "Санкт-Петербург, Ул. 1-ая Советская, 28 к1, офис 18, 1 этаж.";
  const cityNotificationWarning =
    "Вы можете заказать товар в предложенные города, в которые доставляет поставщик.";
  const selfPickWarning =
    "Вы можете забрать товар по указанному адресу в выбранный день и время после оформления заказа и подтверждения от поставщика по звонку или на почту.";
  const supplierShippingTimeWarning =
    "Поставщик может изменить финальную цену и срок доставки в зависимости от выбранного города и региона.";

  return (
    <Form className="relative">
      <div className="mb-3 rounded-2xl bg-basic-0 shadow-upper">
        <div className="mb-4">
          <HeaderWithButtons
            title="Оформление заказа"
            onLeftButtonClick={() => {
              navigate("/cart");
            }}
          />
        </div>
        <div className="mx-5 pb-6 [&>*]:mb-2">
          <div className="mb-3 text-h2_m">Адрес и время</div>
          <InputWithTitle label="Название заведения" onChange={() => {}} />
          {/* <NotificationBlock color="accent" text={cityNotificationWarning} /> */}
          <InputWithTitle label="Адрес доставки" onChange={() => {}} />
          <NotificationBlock
            color="accent"
            text={supplierShippingTimeWarning}
          />
          <InputWithTitle
            className="mb-7"
            label="Комментарий..."
            onChange={() => {}}
          />
          <div className="my-7">
            <div className="mb-2 text-b1_m">Выберите день доставки</div>
            <EntityChipsArea entities={weekDays} />
          </div>
          <div className="my-7 !mb-6">
            <div className="mb-2 text-b1_m">
              Выберите желаемый временной промежуток доставки
            </div>
            <EntityChipsArea entities={availableTime} />
          </div>
          <Toggle
            className="mb mt-6"
            checked={selfPick}
            text="Cамовывоз по адресу постащика"
            onChange={setSelfPick}
          />
          {selfPick && (
            <>
              <div className="my-2 text-b3_m text-text-2">
                {supplierAddress}
              </div>
              <NotificationBlock color="accent" text={selfPickWarning} />
            </>
          )}
        </div>
      </div>
      <div className="mb-3 rounded-2xl bg-basic-0 px-5 py-7 [&>*]:mb-2">
        <div className="mb-3 text-h2_m">Кто примет поставку</div>
        <InputWithTitle label="Имя контактного лица" onChange={() => {}} />
        <InputWithTitle label="Номер телефона" onChange={() => {}} />
        <Toggle
          className="mt-6"
          checked={anotherContact}
          text="Добавить ещё одно контактное лицо"
          onChange={() => addAnotherContact(!anotherContact)}
        />
        {anotherContact && (
          <>
            <InputWithTitle
              className="mt-4"
              label="Имя контактного лица"
              onChange={() => {}}
            />
            <InputWithTitle label="Номер телефона" onChange={() => {}} />
          </>
        )}
      </div>
      <div className="mb-3 rounded-2xl bg-basic-0 px-5 py-7 [&>*]:mb-2">
        <div className="mb-3 text-h2_m">Документы и оплата</div>
        <p className="text-b4_m text-text-1">{paymentInfo}</p>
        <Toggle
          className="mt-6"
          checked={payAsPhys}
          text="Оплатить, как физическое лицо"
          onChange={() => setPayAsPhys(!payAsPhys)}
        />
        {payAsPhys && (
          <>
            <InputWithTitle
              className="mt-4"
              label="ООО / ИП"
              onChange={() => {}}
            />
            <InputWithTitle label="ИНН" onChange={() => {}} />
            <InputWithTitle label="Расчётный счёт" onChange={() => {}} />
            <InputWithTitle label="Банк" onChange={() => {}} />
          </>
        )}
      </div>
      <OrderFixedButton
        bottomText="Заказы принимаются с 10 утра до 7 вечера пн-пт"
        buttonPrimaryText="1 060 ₽"
        buttonSecondaryText="Отправить  заказ"
        onClick={() => {
          navigate("../complete");
        }}
        buttonColor="primary"
      />
    </Form>
  );
}
