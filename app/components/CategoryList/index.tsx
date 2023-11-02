import { useParams } from "@remix-run/react";
import CategoryItem from "./CategoryItem";
import { color } from "@styles/color";

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
    <div
      css={{
        position: "fixed",
        display: "flex",

        width: "18rem",
        maxHeight: "calc(100dvh - 1rem - 2rem)",
        padding: "0.5rem",
        paddingRight: 0,

        border: `2px solid ${color.border.standard}`,
        borderRadius: "1rem",
        boxShadow: `4px 4px 0px 0px ${color.border.standard}`,
      }}
    >
      <div
        css={{
          flexGrow: 1,
          overflow: "auto",
          width: "100%",
          maxHeight: "100%",

          "&::-webkit-scrollbar": {
            backgroundColor: "transparent",
            width: "10px",
            height: "10px",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: color.border.light,
            width: "10px",
            height: "10px",
            borderRadius: "10px",
          },
        }}
      >
        <div css={{ paddingRight: "0.5rem" }}>
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
      </div>
    </div>
  );
}
