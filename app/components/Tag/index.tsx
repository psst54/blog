import { color } from "@styles/color";

export default function Tag({
  item,
}: {
  item: { isSpoiler: boolean; text: string };
}) {
  return (
    <div
      css={{
        padding: "0.25rem 0.75rem",
        border: `2px solid ${color.border.standard}`,
        borderRadius: "2rem",
      }}
    >
      <p
        css={[
          { color: color.text.standard },
          item.isSpoiler && {
            filter: "blur(0.25rem)",
            "&:hover": {
              color: color.text.standard,
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
