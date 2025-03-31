import {
  borderedBlock,
  divideLine,
  filledBlock,
  header,
  image,
  title,
  titleArea,
} from "../styles";

export default function PinnedHeader() {
  return (
    <header className={header}>
      <div className={titleArea}>
        <img src="ocean4.webp" alt="ocean" className={`${image} w-20`} />
        <div className={divideLine} />
        <h1 className={title}>
          <span className={filledBlock}>Pinned</span>
          <span className={borderedBlock}>Posts</span>
        </h1>
      </div>
    </header>
  );
}
