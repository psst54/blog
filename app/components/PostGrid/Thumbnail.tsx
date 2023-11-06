export default function Thumbnail({
  thumbnail,
  title,
}: {
  thumbnail: string;
  title: string;
}) {
  return (
    <img
      src={thumbnail}
      alt={title}
      css={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "calc(1rem - 2px) calc(1rem - 2px) 0 0",
      }}
    />
  );
}
