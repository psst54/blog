import { SIZE } from "@constants/size";

export default function Thumbnail({ thumbnail }: { thumbnail: string }) {
  return (
    <img
      src={thumbnail}
      alt="thumbnail" // [todo] add alt text
      css={{
        width: "9rem",
        height: "6rem",

        objectFit: "cover",
        borderRadius: `calc(${SIZE.BORDER_RADIUS.POST_CARD} - ${SIZE.BORDER.POST_CARD})`,
      }}
    />
  );
}
