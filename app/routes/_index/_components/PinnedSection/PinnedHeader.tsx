import {
  header,
  title,
  filledBlock,
  borderedBlock,
  divideLine,
  image,
} from "../styles";

const long = { width: "5rem" };

export default function PinnedHeader() {
  return (
    <header css={header}>
      <h1 css={title}>
        <img src="ocean4.webp" alt="ocean" css={[image, long]} />
        <div css={divideLine} />
        <span css={filledBlock}>Pinned</span>
        <span css={borderedBlock}>Posts</span>
      </h1>
    </header>
  );
}
