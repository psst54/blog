import { useParams } from "@remix-run/react";

import type { Category } from "~/types/post";
import useCategoryStore from "~/stores/category";

import CategoryItem from "./CategoryItem";
import CategoryListSkeleton from "./Skeleton";

export default function CategoryList() {
  const params = useParams();
  const { categoryList } = useCategoryStore();

  if (categoryList.length === 0) {
    return <CategoryListSkeleton />;
  }

  return (
    <div css={{ overflow: "auto" }}>
      {categoryList.map((datum: Category, datumIdx: number) => {
        return renderTreeItem(datum, datumIdx, 0, params.postId || "");
      })}
    </div>
  );
}

const renderTreeItem = (
  item: Category,
  idx: number,
  depth: number,
  postId: string
) => {
  return (
    <div key={idx}>
      <CategoryItem
        id={item?.id}
        emoji={item?.emoji}
        title={item.title}
        href={`/${item.sub_blog}/${item.id}`}
        indent={depth}
        isOpen={item.isOpen}
        isSelected={postId === item?.id}
      />
      {item.isOpen &&
        item?.children.map((child, childIdx: number) =>
          renderTreeItem(child, childIdx, depth + 1, postId)
        )}
    </div>
  );
};
