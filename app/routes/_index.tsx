import type { LoaderArgs, V2_MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";

import IndexScreen from "@screens/_index.screen";
import { getRecentPosts } from "@functions/supabase";
import type { Env, Post } from "~/types";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "PSST54's log" },
    { name: "description", content: "PSST54의 블로그" },
  ];
};

export const loader = async ({ context }: LoaderArgs) => {
  const supabase = createClient<Database>(
    (context.env as Env).SUPABASE_URL,
    (context.env as Env).SUPABASE_KEY
  );

  let recentPosts: Post[] = [];
  try {
    recentPosts = await getRecentPosts({ supabase, showAll: false });
  } catch (err) {}
  return {
    recentPosts: recentPosts,
  };
};

export default function Index() {
  const {
    recentPosts,
  }: {
    recentPosts: Post[];
  } = useLoaderData<typeof loader>();

  return <IndexScreen recentPosts={recentPosts} />;
}
