import CategoryItem from "./CategoryItem";
import { headerContainer } from "@styles/styles";

const renderTreeItem = (item, idx: number, depth: number) => {
  return (
    <div key={idx}>
      <CategoryItem
        href={`/subBlog/posts/${item.id}`}
        title={item.title}
        postCount={item.postCount}
        indent={depth}
        isSelected={false}
      />
      {item?.children.map((child, childIdx: number) =>
        renderTreeItem(child, childIdx, depth + 1)
      )}
    </div>
  );
};

export default function CategoryList({
  isOpen,
  data,
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
            return renderTreeItem(datum, datumIdx, 0);
          })}
        </div>
      )}
    </div>
  );
}
