import { header, divideLine, image, titleArea } from "../styles";

const long = { width: "5rem" };

const block = "flex items-center h-[3rem] px-[1rem] rounded-[1.5rem]";

export default function PinnedHeader() {
  return (
    <header css={header}>
      <div css={titleArea}>
        <img src="ocean4.webp" alt="ocean" css={[image, long]} />
        <div css={divideLine} />
        <h1 className="flex gap-8pxr items-center w-fit text-[1.75rem] font-bold">
          <span className={`${block} bg-black color-white`}>Pinned</span>
          <span className={`${block} border-2 border-black`}>Posts</span>
        </h1>
      </div>
    </header>
  );
}
