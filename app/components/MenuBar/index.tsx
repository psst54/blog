import loadable from "@loadable/component";
import { Container, Inner } from "./styles";

import MenuIcon from "@components/MenuIcon";

const HomeIcon: JSX.Element = loadable(() => import("@assets/HomeIcon"));
const CodeIcon: JSX.Element = loadable(() => import("@assets/CodeIcon"));
const HeartIcon: JSX.Element = loadable(() => import("@assets/HeartIcon"));

const mainMenu = [
  { icon: HomeIcon, href: "/", alt: "Home" },
  { icon: CodeIcon, href: "/cse", alt: "CSE" },
  { icon: HeartIcon, href: "/like", alt: "Like" },
];

const iconList = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "1rem",
};

export default function MenuBar() {
  return (
    <div css={Container}>
      <div css={Inner}>
        <div css={iconList}>
          {mainMenu.map((menuItem, menuItemIndex) => (
            <MenuIcon key={menuItemIndex} item={menuItem} />
          ))}
        </div>
      </div>
    </div>
  );
}
