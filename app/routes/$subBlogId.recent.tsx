import type { LoaderArgs } from "@remix-run/cloudflare";
import { useLoaderData, useOutletContext } from "@remix-run/react";

import { createClient } from "@supabase/supabase-js";
import { Database } from "@supabase/types";
import { getRecentPosts } from "~/functions/supabase";

import PostPageScreen from "@screens/$subBlogId._index.screen";
import { Env, PlainCategory } from "~/types";

export const loader = async ({ context, params }: LoaderArgs) => {
  const supabase = createClient<Database>(
    (context.env as Env).SUPABASE_URL,
    (context.env as Env).SUPABASE_KEY
  );

  const loadData = async ({ subBlogId }: { subBlogId: string }) => {
    try {
      const databaseData = await getRecentPosts({
        supabase,
        count: 100,
      });

      return {
        title: "최근 포스트",
        subTitle: "",
        posts: databaseData,
      };
    } catch (err) {
      return { title: "에러", subTitle: "", posts: [] };
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
