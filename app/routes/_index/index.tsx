import { useLoaderData } from "@remix-run/react";
import type { Post, SupabaseKey } from "~/types";

import NavBar from "@components/NavBar";
import Page from "@components/Page";
import Content from "./components/Content";

export { loader } from "./utils/loader";
export { meta } from "./utils/meta";

export default function Index() {
  const {
    recentPostList,
    pinnedPostList,
    supabaseKey,
  }: { recentPostList: Post[]; supabaseKey: SupabaseKey } = useLoaderData();

  return (
    <Page
      navbar={<NavBar supabaseKey={supabaseKey} />}
      body={
        <Content
          recentPostList={recentPostList}
          pinnedPostList={pinnedPostList}
        />
      }
    />
  );
}
