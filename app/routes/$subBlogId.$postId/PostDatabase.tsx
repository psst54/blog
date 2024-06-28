import PostListView from "@components/PostListView";
import PaginateNavigator from "@components/PaginateNavigator";
import usePagination from "~/hooks/usePagination";
import type { Post } from "~/types";

export default function Database({ posts }: { posts: Post[] }) {
  const [currentPage, currentPagePosts, setPage] = usePagination({
    data: posts,
  });

  return (
    <>
      <PostListView posts={currentPagePosts} />
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
