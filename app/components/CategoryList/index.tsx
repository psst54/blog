import CategoryItem from "./CategoryItem";

const renderTreeItem = (item, idx: number, depth: number, postId) => {
  return (
    <div key={idx}>
      <CategoryItem
        href={`/subBlog/${item.id}`}
        title={item.title}
        postCount={item.postCount}
        indent={depth}
        isSelected={postId === item.id}
      />
      {item?.children.map((child, childIdx: number) =>
        renderTreeItem(child, childIdx, depth + 1, postId)
      )}
    </div>
  );
};

export default function CategoryList({
  isOpen,
  data,
  postId,
}: {
  isOpen: boolean;
  data: any;
}) {
  return (
    <div css={{ width: isOpen ? "18rem" : "4rem", flexShrink: 0 }}>
      <div css={{ height: "4rem", borderBottom: "2px solid #95E8BB" }} />

      {isOpen && (
        <div css={{ padding: "1rem" }}>
          {data.map((datum, datumIdx: number) => {
            return renderTreeItem(datum, datumIdx, 0, postId);
          })}
        </div>
      )}
    </div>
  );
}
