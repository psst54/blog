import { Link } from "@remix-run/react";
import { COLOR } from "~/constants/color";
import type { Menu } from "~/types";

export default function MenuBar({ item }: { item: Menu }) {
  return (
    <Link to={item.href} css={Button}>
      <item.icon size="2.5rem" color={COLOR.BORDER.STANDARD} />
    </Link>
  );
}

const Button = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "3.5rem",
  height: "3.5rem",

  border: `2px solid ${COLOR.BORDER.STANDARD}`,
  borderRadius: "1rem",
  boxShadow: `4px 4px 0px 0px ${COLOR.PRIMARY.STANDARD}`,

  cursor: "pointer",
};
