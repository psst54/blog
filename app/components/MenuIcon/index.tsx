import { Link } from "@remix-run/react";
import { color } from "@styles/color";
import type { Menu } from "~/types";

export default function MenuBar({ item }: { item: Menu }) {
  return (
    <Link to={item.href} css={Button}>
      <item.icon size="2.5rem" color={color.border.standard} />
    </Link>
  );
}

const Button = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "3.5rem",
  height: "3.5rem",

  border: `2px solid ${color.border.standard}`,
  borderRadius: "1rem",
  boxShadow: `4px 4px 0px 0px ${color.primary.standard}`,

  cursor: "pointer",
};
