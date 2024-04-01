import { useParams } from "@remix-run/react";
import CategoryItem from "./CategoryItem";
import { Container, Inner } from "./styles";
import type { Category } from "~/types";
import CategoryListSkeleton from "./CategoryListSkeleton";

export default function CategoryList({
  data,
  onToggleCategory,
}: {
  data: Category[];
  onToggleCategory: (id: string) => void;
}) {
  const params = useParams();

  return (
    <div css={Container}>
      <div css={Inner}>
        {data.length === 0
          ? renderSkeleton()
          : data.map((datum: Category, datumIdx: number) => {
              return renderTreeItem(
                datum,
                datumIdx,
                onToggleCategory,
                0,
                params.postId || ""
              );
            })}
      </div>
    </div>
  );
}

const renderSkeleton = () => {
  return <CategoryListSkeleton />;
};

const renderTreeItem = (
  item: Category,
  idx: number,
  onToggleCategory: (id: string) => void,
  depth: number,
  postId: string
) => {
  return (
    <div key={idx}>
      <CategoryItem
        id={item?.id}
        title={item?.title}
        href={`/${item?.sub_blog}/${item?.id}`}
        indent={depth}
        isOpen={item.isOpen}
        isSelected={postId === item?.id}
        onToggleCategory={onToggleCategory}
      />
      {item.isOpen &&
        item?.children.map((child, childIdx: number) =>
          renderTreeItem(child, childIdx, onToggleCategory, depth + 1, postId)
        )}
    </div>
  );
};
