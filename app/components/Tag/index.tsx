import { color } from "@styles/color";
import { Tag } from "~/types";

export default function TagItem({ item }: { item: Tag }) {
  return (
    <div
      css={{
        padding: "0.1rem 0.75rem",
        background: color.border.dark,

        border: `2px solid ${color.border.dark}`,
        borderRadius: "2rem",

        color: color.text.reverse,
        fontWeight: 500,
      }}
    >
      <p
        css={[
          { color: color.text.reverse },
          item.isSpoiler && {
            filter: "blur(0.25rem)",
            "&:hover": {
              color: color.text.reverse,
              filter: "none",
            },
          },
        ]}
      >
        {item.text}
      </p>
    </div>
  );
}
