import { COLOR } from "~/constants/color";

export default function Thumbnail({ src }: { src?: string }) {
  return (
    <img
      src={src || "/ocean6.webp"}
      alt="thumbnail" // [todo] add alt text
      css={{
        flexShrink: 0,
        width: "3.5rem",
        height: "3.5rem",

        border: `1px solid ${COLOR.BORDER.LIGHT}`,
        borderRadius: "100%",

        objectFit: "cover",
      }}
    />
  );
}
