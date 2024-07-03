import { useLoaderData, useOutletContext } from "@remix-run/react";

import type { Post, Category, Env } from "~/types";
import type { LoaderArgs, V2_MetaFunction } from "@remix-run/cloudflare";

import { createClient } from "@supabase/supabase-js";
import usePagination from "~/hooks/usePagination";
import getMetaData from "@utils/getMetaData";
import { getSubBlogInfo, getSubBlogMainPosts } from "~/functions";

import PostHeader from "@components/PostHeader";
import PostListView from "@components/PostListView";
import PaginateNavigator from "@components/PaginateNavigator";

interface Database extends Post {
  posts: Post[];
}

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => {
  const content = data!.content;

  return getMetaData({
    title: content!.title,
    subTitle: content!.subTitle,
  });
};

export const loader = async ({ context, params }: LoaderArgs) => {
  const subBlogId = params.subBlogId!;
  const { SUPABASE_URL, SUPABASE_KEY } = context.env as Env;
  const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);

  const databaseData = await getSubBlogMainPosts({ supabase, subBlogId });
  const blogData = await getSubBlogInfo({ supabase, subBlogId });

  return {
    content: {
      title: blogData.title,
      subTitle: blogData.description,
      posts: databaseData,
    },
  };
};

export default function PostPage() {
  const { content } = useLoaderData<typeof loader>();

  const categoryData: Category[] = useOutletContext();

  const [currentPage, currentPagePosts, setPage] = usePagination({
    data: content?.posts,
  });

  return (
    <div css={{ width: "100%", height: "100%" }}>
      <PostHeader
        id={content.id}
        title={content?.title}
        subTitle={content?.subTitle}
        tags={content?.tags}
        postDate={content?.created_at}
        categoryData={categoryData}
      />

      <PostListView posts={currentPagePosts} />

      <PaginateNavigator
        currentPage={currentPage}
        count={content?.posts.length}
        onChangePage={(page) => {
          setPage(page);
        }}
      />
    </div>
  );
}
