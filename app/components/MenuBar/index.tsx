import { Link } from "@remix-run/react";
import loadable from "@loadable/component";
import { color } from "@styles/color";
const HomeIcon = loadable(() => import("@assets/HomeIcon"));
const CodeIcon = loadable(() => import("@assets/CodeIcon"));
const BookBookmarkIcon = loadable(() => import("@assets/BookBookmarkIcon"));
const HeartIcon = loadable(() => import("@assets/HeartIcon"));
const CallChatIcon = loadable(() => import("@assets/CallChatIcon"));
const SettingsIcon = loadable(() => import("@assets/SettingsIcon"));

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const mainMenu = [
  { icon: HomeIcon, href: "/", alt: "Home" },
  { icon: CodeIcon, href: "/cse", alt: "CSE" },
  // { icon: BookBookmarkIcon, href: "/phi", alt: "PHI" },
  { icon: HeartIcon, href: "/like", alt: "Like" },
];

const bottomMenu = [
  // { icon: CallChatIcon, href: "/contact", alt: "연락" },
  // { icon: SettingsIcon, href: "/setting", alt: "설정" },
];

const iconList = {
  display: "flex",
  flexDirection: "column" as "column",
  gap: "1rem",
};

export default function MenuBar() {
  return (
    <div
      css={{
        flexShrink: 0,
        width: "6rem",
        height: "100dvh",
        paddingBottom: "1rem",

        [mq[0]]: {
          width: 0,
        },
      }}
    >
      <div
        css={{
          position: "fixed",
          display: "flex",
          flexDirection: "column" as "column",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "space-between",

          width: "6rem",
          height: "100%",
          padding: "1rem 0",

          overflowY: "auto",

          [mq[0]]: {
            display: "none",
            width: "1rem",
          },
        }}
      >
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

        <div css={iconList}>
          {bottomMenu.map((menuItem, menuItemIdx) => (
            <Link
              aria-label={menuItem.href}
              key={menuItemIdx}
              to={menuItem.href}
              css={{ cursor: "pointer" }}
            >
              <menuItem.icon size="3.5rem" color={color.border.standard} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
