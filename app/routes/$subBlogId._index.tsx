import type { LoaderArgs } from "@remix-run/cloudflare";
import { useLoaderData, useOutletContext } from "@remix-run/react";

import { createClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import { getSubBlogMainPosts, getSubBlogInfo } from "~/functions/supabase";

import PostPageScreen from "@screens/$subBlogId._index.screen";
import type { Env, PlainCategory } from "~/types";

export const loader = async ({ context, params }: LoaderArgs) => {
  const supabase = createClient<Database>(
    (context.env as Env).SUPABASE_URL,
    (context.env as Env).SUPABASE_KEY
  );

  const loadData = async ({ subBlogId }: { subBlogId: string }) => {
    try {
      const databaseData = await getSubBlogMainPosts({
        supabase,
        subBlogId,
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
  const plainCategoryData: PlainCategory[] = useOutletContext();

  return (
    <PostPageScreen content={content} plainCategoryData={plainCategoryData} />
  );
}
