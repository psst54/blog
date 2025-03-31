import {
  header,
  title,
  filledBlock,
  borderedBlock,
  divideLine,
  image,
  titleArea,
} from "../styles";

const long = { width: "5rem" };

export default function PinnedHeader() {
  return (
    <header css={header}>
      <div css={titleArea}>
        <img src="ocean4.webp" alt="ocean" css={[image, long]} />
        <div css={divideLine} />
        <h1 css={title}>
          <span className="underline">Pinned</span>
          <span css={borderedBlock}>Posts</span>
        </h1>
      </div>
    </header>
  );
}
