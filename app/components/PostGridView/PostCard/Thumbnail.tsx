import { SIZE } from "@constants/size";

export default function Thumbnail({ thumbnail }: { thumbnail: string }) {
  return (
    <img
      src={thumbnail}
      alt="thumbnail" // [todo] add alt text
      css={{
        width: "100%",
        height: "50%",

        objectFit: "cover",
        borderRadius: `calc(${SIZE.BORDER_RADIUS.POST_CARD} + ${SIZE.BORDER.POST_CARD})`,
      }}
    />
  );
}
