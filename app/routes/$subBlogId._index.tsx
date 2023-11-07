import type { LoaderArgs } from "@remix-run/cloudflare";
import { useLoaderData, useOutletContext } from "@remix-run/react";

import { createClient } from "@supabase/supabase-js";
import { Database } from "@supabase/types";
import { getPostsById, getSubBlogInfo } from "~/functions/supabase";

import PostPageScreen from "@screens/$subBlogId._index.screen";

export const loader = async ({ context, params }: LoaderArgs) => {
  const supabase = createClient<Database>(
    context.env.SUPABASE_URL,
    context.env.SUPABASE_KEY
  );

  const loadData = async ({ subBlogId }: { subBlogId: string }) => {
    try {
      const databaseData = await getPostsById({
        supabase,
        subBlogId,
        postId: null,
      });

      const blogData = await getSubBlogInfo({ supabase, subBlogId });

      return {
        title: blogData.title,
        subTitle: blogData.description,
        posts: databaseData,
      };
    } catch (err) {
      return null;
    }
  };

  const subBlogId = params.subBlogId || "";

  const data = await loadData({ subBlogId });

  return { content: data };
};

export default function PostPage() {
  const { content } = useLoaderData<typeof loader>();
  const plainCategoryData = useOutletContext();

  return (
    <PostPageScreen content={content} plainCategoryData={plainCategoryData} />
  );
}
