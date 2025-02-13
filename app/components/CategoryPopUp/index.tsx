import { useState } from "react";
import loadable from "@loadable/component";

import MenuIcon from "@components/MenuIcon";
import CategoryList from "@components/CategoryList";

import RightChevronIcon from "@assets/RightChevronIcon";
import ListIcon from "@assets/ListIcon";
import {
  OpenButton,
  CloseButton,
  ButtonDescriptionText,
  CategorySlide,
} from "./styles";
import { Link } from "@remix-run/react";

const HomeIcon = loadable(() => import("@assets/HomeIcon"));
const CodeIcon = loadable(() => import("@assets/CodeIcon"));
const HeartIcon = loadable(() => import("@assets/HeartIcon"));

const mainMenu = [
  { icon: HomeIcon, href: "/", alt: "Home" },
  { icon: CodeIcon, href: "/cse", alt: "CSE" },
  { icon: HeartIcon, href: "/like", alt: "Like" },
];

const titleWrapper = { display: "flex", alignItems: "center", gap: "0.5rem" };

export default function CategoryPopUp() {
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
        <ListIcon size="1.5rem" />
      </button>

      {isOpen && (
        <div css={CategorySlide}>
          <div css={titleWrapper}>
            <button
              aria-label="toggle category menu"
              css={CloseButton}
              onClick={onClose}
            >
              <RightChevronIcon />
            </button>
            <h2 css={ButtonDescriptionText}>접기</h2>
          </div>

          <div css={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            {mainMenu.map((menuItem, menuItemIndex) => (
              <Link key={menuItemIndex} to={menuItem.href}>
                <MenuIcon item={menuItem} />
              </Link>
            ))}
          </div>

          <CategoryList data={data} onToggleCategory={onToggleCategory} />
        </div>
      )}
    </div>
  );
}
