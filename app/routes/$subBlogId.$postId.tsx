import type { LoaderArgs } from "@remix-run/cloudflare";
import { useLoaderData, useOutletContext } from "@remix-run/react";

import { createClient } from "@supabase/supabase-js";
import { Database } from "@supabase/types";
import { getSubBlogId } from "@functions/category";
import { getPostById, getPostsById } from "@functions/supabase";

import PostDetailPageScreen from "@screens/$subBlogId.$postId.screen";

export const loader = async ({ context, params }: LoaderArgs) => {
  const supabase = createClient<Database>(
    context.env.SUPABASE_URL,
    context.env.SUPABASE_KEY
  );

  const loadData = async ({
    subBlogId,
    postId,
  }: {
    subBlogId: string;
    postId: string;
  }) => {
    try {
      const postData = await getPostById({ supabase, postId });

      if (postData.type === "post") return postData;

      const databaseData = await getPostsById({
        supabase,
        subBlogId,
        postId,
      });

      return { ...postData, posts: databaseData };
    } catch (err) {
      return null;
    }
  };

  const subBlogId = getSubBlogId({ params });

  const data = await loadData({
    subBlogId,
    postId: params.postId || "",
  });

  return { content: data };
};

export default function PostPage() {
  const { content } = useLoaderData<typeof loader>();
  const plainCategoryData = useOutletContext();

  return (
    <PostDetailPageScreen
      content={content}
      plainCategoryData={plainCategoryData}
    />
  );
}
