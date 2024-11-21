import { COLOR } from "~/constants/color";

export default function Thumbnail({ thumbnail }: { thumbnail: string }) {
  return (
    <img
      src={thumbnail}
      alt="thumbnail" // [todo] add alt text
      css={{
        width: "4rem",
        height: "4rem",

        border: `1px solid ${COLOR.BORDER.LIGHT}`,
        borderRadius: "100%",

        objectFit: "cover",
      }}
    />
  );
}
