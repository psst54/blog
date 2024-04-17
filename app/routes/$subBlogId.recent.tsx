import type { LoaderArgs, V2_MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData, useOutletContext } from "@remix-run/react";

import { createClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import { getRecentPosts } from "~/functions/supabase";

import PostPageScreen from "@screens/$subBlogId._index.screen";
import type { Category, Env } from "~/types";

export const meta: V2_MetaFunction<typeof loader> = () => {
  return [
    { title: `최근 포스트 | PSST54's log` },
    { name: "author", content: "psst54" },
    { name: "og:site_name", content: "PSST54's log" },
    { name: "og:title", content: "최근 포스트" },
    { name: "og:type", content: "website" },
  ];
};

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
  const categoryData: Category[] = useOutletContext();

  return <PostPageScreen content={content} categoryData={categoryData} />;
}
