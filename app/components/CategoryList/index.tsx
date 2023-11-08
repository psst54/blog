import { useParams } from "@remix-run/react";
import CategoryItem from "./CategoryItem";
import { color } from "@styles/color";
import { mq } from "@styles/size";
import { Category, IsPostOpen } from "~/types";

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
    <div
      css={{
        display: "flex",

        width: "100%",
        maxHeight: "100%",
        padding: "0.5rem",
        paddingRight: 0,

        border: `2px solid ${color.border.standard}`,
        borderRadius: "1rem",
        boxShadow: `6px 6px 0px 0px ${color.primary.standard}`,

        [mq[0]]: {
          border: "none",
          boxShadow: "none",
        },
      }}
    >
      <div
        css={{
          flexGrow: 1,
          overflow: "auto",
          width: "100%",
          maxHeight: "100%",
        }}
      >
        <div css={{ paddingRight: "0.5rem" }}>
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
    </div>
  );
}
