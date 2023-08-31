import { useParams } from "@remix-run/react";
import CategoryItem from "./CategoryItem";

const renderTreeItem = (
  item,
  idx: number,
  isPostOpen,
  toggleCategory,
  depth: number,
  subBlogId: string,
  postId: string
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
        toggleCategory={toggleCategory}
      />
      {isPostOpen[item.id] &&
        item?.children.map((child, childIdx: number) =>
          renderTreeItem(
            child,
            childIdx,
            isPostOpen,
            toggleCategory,
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
  toggleCategory,
  subBlogId,
}: {
  data: any;
  isPostOpen: boolean[];
  toggleCategory: (id: number) => void;
  subBlogId: string;
}) {
  const params = useParams();

  return (
    <div>
      {data.map((datum, datumIdx: number) => {
        return renderTreeItem(
          datum,
          datumIdx,
          isPostOpen,
          toggleCategory,
          0,
          subBlogId,
          params.postId || ""
        );
      })}
    </div>
  );
}
