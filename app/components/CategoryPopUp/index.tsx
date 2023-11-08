import { useState } from "react";
import loadable from "@loadable/component";

import { color } from "@styles/color";
import CategoryList from "@components/CategoryList";
import MenuIcon from "@components/MenuIcon";

import RightChevronIcon from "@assets/RightChevronIcon";
import ListIcon from "@assets/ListIcon";

const HomeIcon = loadable(() => import("@assets/HomeIcon"));
const CodeIcon = loadable(() => import("@assets/CodeIcon"));
const HeartIcon = loadable(() => import("@assets/HeartIcon"));

import { Category, IsPostOpen } from "~/types";

const mainMenu = [
  { icon: HomeIcon, href: "/", alt: "Home" },
  { icon: CodeIcon, href: "/cse", alt: "CSE" },
  { icon: HeartIcon, href: "/like", alt: "Like" },
];

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
  gap: "1rem",

  background: color.background.standard,
  borderWidth: "2px 0 2px 2px",
  borderStyle: "solid",
  borderColor: color.border.standard,
  borderRadius: "1rem 0 0 1rem",
  padding: "1.25rem",

  zIndex: 10,
};

const titleWrapper = { display: "flex", alignItems: "center", gap: "0.5rem" };

export default function CategoroyPopUp({
  data,
  isPostOpen,
  toggleCategory,
}: {
  data: Category[];
  isPostOpen: IsPostOpen;
  toggleCategory: (id: string) => void;
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

          <div css={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            {mainMenu.map((menuItem, menuItemIndex) => (
              <MenuIcon key={menuItemIndex} item={menuItem} />
            ))}
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
