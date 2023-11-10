import { useParams } from "@remix-run/react";
import CategoryItem from "./CategoryItem";
import { Container, Inner } from "./styles";
import { Category, IsPostOpen } from "~/types";

export default function CategoryList({
  data,
  isPostOpen,
  toggleCategory,
}: {
  data: any;
  isPostOpen: IsPostOpen;
  toggleCategory: (id: string) => void;
}) {
  const params = useParams();

  return (
    <div css={Container}>
      <div css={Inner}>
        {data.map((datum: Category, datumIdx: number) => {
          return renderTreeItem(
            datum,
            datumIdx,
            isPostOpen,
            toggleCategory,
            0,
            params.postId || ""
          );
        })}
      </div>
    </div>
  );
}

const renderTreeItem = (
  item: Category,
  idx: number,
  isPostOpen: IsPostOpen,
  toggleCategory: (id: string) => void,
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
            postId
          )
        )}
    </div>
  );
};
