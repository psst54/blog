import { header, title, border, line, img } from "./styles";

export default function PinnedHeader() {
  return (
    <header css={header}>
      <h1 css={title}>
        <div css={line} />
        <span css={border}>Pinned</span>
        <span css={border}>Posts</span>
        <img src="ocean4.webp" alt="ocean" css={[img, { width: "5rem" }]} />
      </h1>
    </header>
  );
}
