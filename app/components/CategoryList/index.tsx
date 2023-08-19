import { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const renderTreeItem = (
  item,
  idx: number,
  dataOpen,
  setDataOpen,
  depth: number,
  postId
) => {
  return (
    <div key={idx}>
      <CategoryItem
        id={item.id}
        title={item.title}
        postCount={item.postCount}
        indent={depth}
        isOpen={dataOpen[item.id]}
        isSelected={postId === item.id}
        setDataOpen={setDataOpen}
      />
      {dataOpen[item.id] &&
        item?.children.map((child, childIdx: number) =>
          renderTreeItem(
            child,
            childIdx,
            dataOpen,
            setDataOpen,
            depth + 1,
            postId
          )
        )}
    </div>
  );
};

export default function CategoryList({
  data,
  dataOpen,
  setDataOpen,
  postId,
}: {
  isOpen: boolean;
  data: any;
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
              dataOpen,
              setDataOpen,
              0,
              postId
            );
          })}
        </div>
      )}
    </div>
  );
}
