import { useState, useMemo } from "react";

import { color } from "@styles/color";
import CategoryList from "@components/CategoryList";

import RightChevronIcon from "@assets/RightChevronIcon";
import ListIcon from "@assets/ListIcon";

const openButton = {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",

  background: "transparent",
  border: "none",
  outline: "none",
  cursor: "pointer",
};

const closeButton = {
  background: "none",
  border: "none",
  outline: "none",
  cursor: "pointer",
};

const buttonDescriptionText = { fontSize: "1.25rem" };

const CategorySlide = {
  position: "fixed" as "fixed",
  width: "90vw",
  maxWidth: "400px",
  height: "100dvh",
  top: 0,
  right: 0,

  display: "flex",
  flexDirection: "column" as "column",

  background: color.background.standard,
  borderWidth: "2px 0 2px 2px",
  borderStyle: "solid",
  borderColor: color.border.standard,
  borderRadius: "1rem 0 0 1rem",
  padding: "1.25rem",

  zIndex: 10,
};

const titleWrapper = { display: "flex", alignItems: "center", gap: "0.5rem" };

export default function CategoroyPopUp({ data, isPostOpen, toggleCategory }) {
  const [isOpen, setIsOpen] = useState(false);

  function onOpen() {
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
  }

  return (
    <div>
      <button
        aria-label="toggle category menu"
        css={openButton}
        onClick={onOpen}
      >
        <ListIcon size="1.5rem" color="#000" />
      </button>

      {isOpen && (
        <div css={CategorySlide}>
          <div css={titleWrapper}>
            <button
              aria-label="toggle category menu"
              css={closeButton}
              onClick={onClose}
            >
              <RightChevronIcon size="1rem" color="#000" />
            </button>
            <h2 css={buttonDescriptionText}>접기</h2>
          </div>

          <CategoryList
            data={data}
            isPostOpen={isPostOpen}
            toggleCategory={toggleCategory}
          />
        </div>
      )}
    </div>
  );
}
