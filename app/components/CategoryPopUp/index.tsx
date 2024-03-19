import { useState, Suspense, lazy } from "react";
import loadable from "@loadable/component";

import MenuIcon from "@components/MenuIcon";

import RightChevronIcon from "@assets/RightChevronIcon";
import ListIcon from "@assets/ListIcon";
import {
  OpenButton,
  CloseButton,
  ButtonDescriptionText,
  CategorySlide,
} from "./styles";
import type { Category } from "~/types";

const LazyCategoryList = lazy(() => import("@components/CategoryList"));

const HomeIcon = loadable(() => import("@assets/HomeIcon"));
const CodeIcon = loadable(() => import("@assets/CodeIcon"));
const HeartIcon = loadable(() => import("@assets/HeartIcon"));

const mainMenu = [
  { icon: HomeIcon, href: "/", alt: "Home" },
  { icon: CodeIcon, href: "/cse", alt: "CSE" },
  { icon: HeartIcon, href: "/like", alt: "Like" },
];

const titleWrapper = { display: "flex", alignItems: "center", gap: "0.5rem" };

export default function CategoroyPopUp({
  data,
  onToggleCategory,
}: {
  data: Category[];
  onToggleCategory: (id: string) => void;
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
        css={OpenButton}
        onClick={onOpen}
      >
        <ListIcon size="1.5rem" color="#000" />
      </button>

      {isOpen && (
        <div css={CategorySlide}>
          <div css={titleWrapper}>
            <button
              aria-label="toggle category menu"
              css={CloseButton}
              onClick={onClose}
            >
              <RightChevronIcon size="1rem" color="#000" />
            </button>
            <h2 css={ButtonDescriptionText}>접기</h2>
          </div>

          <div css={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            {mainMenu.map((menuItem, menuItemIndex) => (
              <MenuIcon key={menuItemIndex} item={menuItem} />
            ))}
          </div>

          <Suspense fallback="">
            <LazyCategoryList data={data} onToggleCategory={onToggleCategory} />
          </Suspense>
        </div>
      )}
    </div>
  );
}
