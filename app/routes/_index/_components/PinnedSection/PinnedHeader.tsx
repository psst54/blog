const block = "flex items-center h-12 px-4 rounded-full";

export default function PinnedHeader() {
  return (
    <header className="flex flex-col gap-2 px-2 sm:px-4">
      <div className="flex flex-1 gap-2 items-center">
        <img
          src="ocean4.webp"
          alt="ocean"
          className="size-12 object-cover rounded-full w-20"
        />
        <div className="flex-1 h-[3px] bg-bg-black" />
        <h1 className="flex gap-2 items-center w-fit text-[1.75rem] font-bold">
          <span className={`${block} bg-bg-reverse text-text-reverse`}>
            Pinned
          </span>
          <span className={`${block} border-2 border-text-standard`}>
            Posts
          </span>
        </h1>
      </div>
    </header>
  );
}
