import PostHeader from "@components/PostHeader";
import PostGrid from "@components/PostGrid";
import PaginateNavigator from "@components/PaginateNavigator";
import { Post, PlainCategory } from "~/types";
import { container } from "./styles";
import usePagination from "~/hooks/usePagination";

interface Database extends Post {
  posts: Post[];
}

export default function PostPageScreen({
  content,
  plainCategoryData,
}: {
  content: Database;
  plainCategoryData: PlainCategory[];
}) {
  const [currentPage, currentPagePosts, setPage] = usePagination({
    data: content?.posts,
  });

  return (
    <div css={{ width: "100%", height: "100%" }}>
      <div css={container}>
        <PostHeader
          id={content.id}
          title={content?.title}
          subTitle={content?.subTitle}
          tags={content?.tags}
          postDate={content?.created_at}
          plainCategoryData={plainCategoryData}
        />

        <PostGrid posts={currentPagePosts} />

        <PaginateNavigator
          currentPage={currentPage}
          count={content?.posts.length}
          onChangePage={(page) => {
            setPage(page);
          }}
        />
      </div>
    </div>
  );
}
