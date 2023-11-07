import loadable from "@loadable/component";

import MenuIcon from "@components/MenuIcon";

const HomeIcon = loadable(() => import("@assets/HomeIcon"));
const CodeIcon = loadable(() => import("@assets/CodeIcon"));
const HeartIcon = loadable(() => import("@assets/HeartIcon"));

const mainMenu = [
  { icon: HomeIcon, href: "/", alt: "Home" },
  { icon: CodeIcon, href: "/cse", alt: "CSE" },
  { icon: HeartIcon, href: "/like", alt: "Like" },
];

import { mq } from "@styles/size";

const MENU_WIDTH = "6rem";

const container = {
  flexShrink: 0,
  width: MENU_WIDTH,
  height: "100dvh",
  paddingBottom: "1rem",

  [mq[0]]: {
    width: 0,
  },
};

const innerContainer = {
  position: "fixed",
  display: "flex",
  flexDirection: "column" as "column",
  gap: "1rem",
  alignItems: "center",

  width: "MENU_WIDTH",
  height: "100%",
  padding: "1rem",

  overflowY: "auto",

  [mq[0]]: {
    display: "none",
    width: "1rem",
  },
};

const iconList = {
  display: "flex",
  flexDirection: "column" as "column",
  gap: "1rem",
};

export default function MenuBar() {
  return (
    <div css={container}>
      <div css={innerContainer}>
        <div css={iconList}>
          {mainMenu.map((menuItem, menuItemIndex) => (
            <MenuIcon key={menuItemIndex} item={menuItem} />
          ))}
        </div>
      </div>
    </div>
  );
}
