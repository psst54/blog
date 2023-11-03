import { Link } from "@remix-run/react";
import loadable from "@loadable/component";
import { color } from "@styles/color";

const HomeIcon = loadable(() => import("@assets/HomeIcon"));
const CodeIcon = loadable(() => import("@assets/CodeIcon"));
const HeartIcon = loadable(() => import("@assets/HeartIcon"));

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const mainMenu = [
  { icon: HomeIcon, href: "/", alt: "Home" },
  { icon: CodeIcon, href: "/cse", alt: "CSE" },
  { icon: HeartIcon, href: "/like", alt: "Like" },
];

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
          {mainMenu.map((menuItem, menuItemIdx) => (
            <Link
              aria-label={menuItem.href}
              key={menuItemIdx}
              to={menuItem.href}
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                width: "3.5rem",
                height: "3.5rem",

                border: `2px solid ${color.border.standard}`,
                borderRadius: "1rem",
                boxShadow: `4px 4px 0px 0px ${color.primary.standard}`,

                cursor: "pointer",
              }}
            >
              <menuItem.icon size="2.5rem" color={color.border.standard} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
