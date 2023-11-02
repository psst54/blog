export default function Thumbnail({ thumbnail }: { thumbnail: string }) {
  return (
    <img
      src={thumbnail}
      css={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "calc(1rem - 2px) calc(1rem - 2px) 0 0",
      }}
    />
  );
}
