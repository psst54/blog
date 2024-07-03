import type { LoaderArgs, V2_MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import { getRecentPostList } from "@functions/supabase";
import type { Env, Post } from "~/types";

import NavBar from "~/components/NavBar";
import Content from "./Content";

import { background } from "@styles/main";
import getMetaData from "@utils/getMetaData";

export const meta: V2_MetaFunction = () => {
  return getMetaData({});
};

export const loader = async ({ context }: LoaderArgs) => {
  const { SUPABASE_URL, SUPABASE_KEY } = context.env as Env;
  const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);

  let recentPostList: Post[] = [];
  try {
    recentPostList = await getRecentPostList({ supabase, showAll: false });
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
