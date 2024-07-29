import { Link } from "@remix-run/react";
import { COLOR } from "@constants/color";
import RightChevronIcon from "@assets/RightChevronIcon";
import { title } from "@styles/main";

export default function Header() {
  return (
    <Link to="all" css={header}>
      <h2 css={title}>모든 포스트</h2>
      <RightChevronIcon size="1.5rem" color={COLOR.TEXT.STANDARD} />
    </Link>
  );
}

export const header = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  width: "100%",
  background: "transparent",
  border: "none",
  outline: "none",

  textDecoration: "none",

  "&:hover": {
    "*": {
      color: COLOR.TEXT.LINK,
    },
  },
};
