export default function Thumbnail({ thumbnail }: { thumbnail: string }) {
  return (
    <img
      src={thumbnail}
      css={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "1rem 1rem 0 0",
      }}
    />
  );
}
