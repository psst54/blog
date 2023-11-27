import PostHeader from "@components/PostHeader";
import Content from "@components/PostContent";
import PostGrid from "@components/PostGrid";
import PaginateNavigator from "@components/PaginateNavigator";
import { size, mq } from "@styles/size";
import { PlainCategory, Post, Tag } from "~/types";
import usePagination from "~/hooks/usePagination";

export default function PostDetailPageScreen({
  content,
  plainCategoryData,
}: {
  content: {
    id: string;
    title: string;
    subTitle?: string;
    tags: Tag[];
    created_at: string;
    type: "post" | "database";
    posts: Post[];
    content: Post;
  };
  plainCategoryData: PlainCategory[];
}) {
  const [currentPage, currentPagePosts, setPage] = usePagination({
    data: content?.posts || [],
  });

  return (
    <div css={container}>
      <PostHeader
        id={content.id}
        title={content.title}
        subTitle={content?.subTitle}
        tags={content?.tags}
        postDate={content?.created_at}
        plainCategoryData={plainCategoryData}
      />
      {content?.type === "post" && <Content content={content?.content} />}
      {content?.type === "database" && (
        <>
          <PostGrid posts={currentPagePosts} />
          <PaginateNavigator
            currentPage={currentPage}
            count={content?.posts.length}
            onChangePage={(page) => {
              setPage(page);
            }}
          />
        </>
      )}
    </div>
  );
}

const container = {
  width: "100%",
  padding: "1rem 1.5rem",

  wordBreak: "break-word" as "break-word",

  [mq[0]]: {
    paddingTop: `calc(${size.TOPBAR_HEIGHT} + 1rem)`,
  },

  [mq[1]]: {
    padding: "1rem",
    paddingTop: `calc(${size.TOPBAR_HEIGHT} + 1rem)`,
  },
};
