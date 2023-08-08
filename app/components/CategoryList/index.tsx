import CategoryItem from "./CategoryItem";

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
  isOpen,
  data,
  dataOpen,
  setDataOpen,
  postId,
}: {
  isOpen: boolean;
  data: any;
  postId: string;
}) {
  return (
    <div css={{ width: isOpen ? "18rem" : "4rem", flexShrink: 0 }}>
      <div css={{ height: "4rem", borderBottom: "2px solid #95E8BB" }} />

      {isOpen && (
        <div css={{ padding: "1rem" }}>
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
