import { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const renderTreeItem = (
  item,
  idx: number,
  isPostOpen,
  setIsPostOpen,
  depth: number,
  subBlogId: string,
  postId
) => {
  return (
    <div key={idx}>
      <CategoryItem
        subBlogId={subBlogId}
        id={item?.id}
        title={item?.title}
        indent={depth}
        // isOpen={false}
        isOpen={isPostOpen[item?.id]}
        isSelected={postId === item?.id}
        setIsPostOpen={setIsPostOpen}
      />
      {isPostOpen[item.id] &&
        item?.children.map((child, childIdx: number) =>
          renderTreeItem(
            child,
            childIdx,
            isPostOpen,
            setIsPostOpen,
            depth + 1,
            subBlogId,
            postId
          )
        )}
    </div>
  );
};

export default function CategoryList({
  data,
  isPostOpen,
  setIsPostOpen,
  subBlogId,
  postId,
}: {
  setIsPostOpen: Function;
  data: any;
  subBlogId: string;
  postId: string;
}) {
  const [isOpen, setIsOpen] = useState(true);

  const handleResize = () => {
    if (window.innerWidth < 1464) setIsOpen(false);
    else setIsOpen(true);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div
      css={{
        width: isOpen ? "18rem" : "4rem",
        flexShrink: 0,
        [mq[0]]: {
          display: "none",
        },
      }}
    >
      {isOpen && (
        <div css={{ padding: "1rem", paddingTop: "2rem" }}>
          {data.map((datum, datumIdx: number) => {
            return renderTreeItem(
              datum,
              datumIdx,
              isPostOpen,
              setIsPostOpen,
              0,
              subBlogId,
              postId
            );
          })}
        </div>
      )}
    </div>
  );
}
