import type { Menu } from "~/types/menu";
import { COLOR } from "~/constants/color";

const subBlogButton = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "3.5rem",
  height: "3.5rem",

  border: `2px solid ${COLOR.BORDER.STANDARD}`,
  borderRadius: "100%",

  cursor: "pointer",
};

export default function MenuIcon({ item }: { item: Menu }) {
  return (
    <div css={subBlogButton}>
      <item.icon size="2.5rem" color={COLOR.BORDER.STANDARD} />
    </div>
  );
}
