import PostGrid from "@components/PostGrid";
import PaginateNavigator from "@components/PaginateNavigator";
import usePagination from "~/hooks/usePagination";
import { Post } from "~/types";

export default function Database({ posts }: { posts: Post[] }) {
  const [currentPage, currentPagePosts, setPage] = usePagination({
    data: posts,
  });

  return (
    <>
      <PostGrid posts={currentPagePosts} />
      <PaginateNavigator
        currentPage={currentPage}
        count={posts.length}
        onChangePage={(page) => {
          setPage(page);
        }}
      />
    </>
  );
}
