import { SIZE } from "~/constants/size";

export default function Thumbnail({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt="thumbnail" // [todo] add alt text
      css={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: SIZE.BORDER_RADIUS.POST_CARD,
      }}
    />
  );
}
