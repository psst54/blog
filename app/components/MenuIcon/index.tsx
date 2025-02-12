import type { Menu } from "~/types/menu";
import { COLOR } from "@constants/color";

export default function MenuIcon({ item }: { item: Menu }) {
  return (
    <div css={Button}>
      <item.icon size="2.5rem" color={COLOR.BORDER.STANDARD} />
    </div>
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

  cursor: "pointer",
};
