import { Link } from "@remix-run/react";
import HomeIcon from "@assets/HomeIcon";
import CodeIcon from "@assets/CodeIcon";
import BookBookmarkIcon from "@assets/BookBookmarkIcon";
import HeartIcon from "@assets/HeartIcon";
import CallChatIcon from "@assets/CallChatIcon";
import SettingsIcon from "@assets/SettingsIcon";

const mainMenu = [
  { icon: HomeIcon, href: "/", alt: "Home" },
  { icon: CodeIcon, href: "/subBlog", alt: "CSE" },
  { icon: BookBookmarkIcon, href: "/subBlog", alt: "PHI" },
  { icon: HeartIcon, href: "/subBlog", alt: "Like" },
];

const bottomMenu = [
  { icon: CallChatIcon, href: "/contact", alt: "연락" },
  { icon: SettingsIcon, href: "/setting", alt: "설정" },
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
        width: "fit-content",
        height: "100%",
        paddingBottom: "1rem",
      }}
    >
      <div
        css={{
          display: "flex",
          flexDirection: "column" as "column",
          gap: "1rem",
          justifyContent: "space-between",

          width: "fit-content",
          height: "100%",
          padding: "0 1rem",

          overflowY: "scroll",

          "::-webkit-scrollbar": {
            width: "8px",
          },
          "::-webkit-scrollbar-thumb": {
            borderRadius: "4px",
            background: "#2222",
          },
        }}
      >
        <div css={iconList}>
          {mainMenu.map((menuItem, menuItemIdx) => (
            <Link
              key={menuItemIdx}
              to={menuItem.href}
              css={{ cursor: "pointer" }}
            >
              <menuItem.icon size="3.5rem" color="#fff" />
            </Link>
          ))}
        </div>

        <div css={iconList}>
          {bottomMenu.map((menuItem, menuItemIdx) => (
            <Link
              key={menuItemIdx}
              to={menuItem.href}
              css={{ cursor: "pointer" }}
            >
              <menuItem.icon size="3.5rem" color="#fff" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
