import type { LoaderArgs } from "@remix-run/cloudflare";
import { useLoaderData, useOutletContext } from "@remix-run/react";

import { createClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import { getRecentPosts } from "~/functions/supabase";

import PostPageScreen from "@screens/$subBlogId._index.screen";
import type { Env, PlainCategory } from "~/types";

export const loader = async ({ context }: LoaderArgs) => {
  const supabase = createClient<Database>(
    (context.env as Env).SUPABASE_URL,
    (context.env as Env).SUPABASE_KEY
  );

  const loadData = async () => {
    try {
      const databaseData = await getRecentPosts({
        supabase,
        count: 100,
        showAll: true,
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

  const data = await loadData();

  return { content: data };
};

export default function PostPage() {
  const { content } = useLoaderData<typeof loader>();
  const plainCategoryData: PlainCategory[] = useOutletContext();

  return (
    <PostPageScreen content={content} plainCategoryData={plainCategoryData} />
  );
}
