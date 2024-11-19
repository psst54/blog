import { SIZE } from "@constants/size";

export default function Thumbnail({ thumbnail }: { thumbnail: string }) {
  return (
    <img
      src={thumbnail}
      alt="thumbnail" // [todo] add alt text
      css={{
        width: "100%",
        minHeight: "50%",
        maxHeight: "50%",

        objectFit: "cover",
        borderTopLeftRadius: `calc(${SIZE.BORDER_RADIUS.POST_CARD} - ${SIZE.BORDER.POST_CARD})`,
        borderTopRightRadius: `calc(${SIZE.BORDER_RADIUS.POST_CARD} - ${SIZE.BORDER.POST_CARD})`,
      }}
    />
  );
}
