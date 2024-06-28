import type { LoaderArgs, V2_MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import { getRecentPosts } from "@functions/supabase";
import type { Env, Post } from "~/types";

import NavBar from "~/components/NavBar";
import Content from "./Content";

import { background } from "@styles/main";

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

  let recentPostList: Post[] = [];
  try {
    recentPostList = await getRecentPosts({ supabase, showAll: false });
  } catch (err) {}
  return {
    recentPostList: recentPostList,
  };
};

export default function Index() {
  const { recentPostList }: { recentPostList: Post[] } =
    useLoaderData<typeof loader>();

  return (
    <main css={background}>
      <NavBar />
      <Content posts={recentPostList} />
    </main>
  );
}
