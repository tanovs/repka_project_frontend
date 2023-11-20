import {
  FloatingPortal,
  FloatingOverlay,
  FloatingFocusManager,
  useFloating,
  useInteractions,
  useDismiss,
} from "@floating-ui/react";
import { createContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import WideButton from "../../UI/wide-button/wide-button";
import { ButtonIcon } from "../../UI/button-icon/button-icon";
import { ReactComponent as CrossIcon } from "../../assets/icons/cross.svg";

type ConfirmSkipProductAddDialog = {};

export const ConfirmDialogContext = createContext<(isOpen: boolean) => void>(
  () => {}
);

export default function SupplierRegisterWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  // const click = useClick(context);
  // const role = useRole(context);
  const dismiss = useDismiss(context, { outsidePressEvent: "mousedown" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    // click,
    // role,
    dismiss,
  ]);

  return (
    <>
      <ConfirmDialogContext.Provider value={setIsOpen}>
        <Outlet />
      </ConfirmDialogContext.Provider>
      <FloatingPortal>
        {isOpen && (
          <FloatingOverlay
            className="grid place-items-center bg-[#00000029] backdrop-blur-[2px]"
            lockScroll
          >
            <FloatingFocusManager context={context}>
              <div
                className="relative flex w-11/12 flex-col items-stretch rounded-2xl bg-basic-0 px-5 py-10 text-center text-text-3"
                ref={refs.setFloating}
                {...getFloatingProps()}
              >
                <div className="mb-6 text-h1_m">Без товаров</div>
                <p className="mb-6 text-b3_m">
                  Вы можете завершить заполнение формы,не добавляя товары. В
                  будущем добавить товары можно будет через администратора.
                </p>
                <WideButton
                  primaryText="Отправить форму"
                  color="primary"
                  onClick={() => {
                    navigate("./registration-complete");
                    setIsOpen(false);
                  }}
                />
                <ButtonIcon
                  className="absolute right-4 top-4"
                  onClick={() => setIsOpen(false)}
                >
                  <CrossIcon />
                </ButtonIcon>
              </div>
            </FloatingFocusManager>
          </FloatingOverlay>
        )}
      </FloatingPortal>
    </>
  );
}
