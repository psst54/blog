import { type ReactElement, useState } from "react";
import { openButton } from "./styles";

export default function PopUp({
  icon,
  content,
}: {
  icon: ReactElement;
  content: ReactElement;
}) {
  const [isOpen, setIsOpen] = useState(false);

  function onOpen() {
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
  }

  return (
    <div>
      <button aria-label="open button" css={openButton} onClick={onOpen}>
        {icon}
      </button>

      {isOpen && (
        <>
          <div
            onClick={onClose}
            css={{
              position: "fixed",
              top: 0,
              left: 0,

              background: "#0003",
              width: "100vw",
              height: "100dvh",

              zIndex: 100,
            }}
          />
          {content}
        </>
      )}
    </div>
  );
}
