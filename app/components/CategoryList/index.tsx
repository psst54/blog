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
    <div css={{ flex: 1, overflow: "auto" }}>
      {categoryList.map((datum: Category) => {
        return renderTreeItem(datum, 0, params.postId || "");
      })}
    </div>
  );
}

const renderTreeItem = (item: Category, depth: number, postId: string) => {
  const { id, emoji, title, sub_blog, isOpen, children } = item;

  return (
    <div key={id}>
      <CategoryItem
        id={id}
        emoji={emoji}
        title={title}
        href={`/${sub_blog}/${id}`}
        indent={depth}
        isOpen={isOpen}
        isSelected={postId === id}
        hasChildren={children.length !== 0}
      />
      {isOpen &&
        children?.map((child) => renderTreeItem(child, depth + 1, postId))}
    </div>
  );
};
