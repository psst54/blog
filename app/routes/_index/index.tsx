import { useLoaderData } from "@remix-run/react";
import type { Post, SupabaseKey } from "~/types";

import NavBar from "@components/NavBar";
import Content from "./components/Content";
import { background } from "@styles/main";

export { loader } from "./utils/loader";
export { meta } from "./utils/meta";

export default function Index() {
  const {
    recentPostList,
    supabaseKey,
  }: { recentPostList: Post[]; supabaseKey: SupabaseKey } = useLoaderData();

  return (
    <main css={background}>
      <NavBar supabaseKey={supabaseKey} />
      <Content postList={recentPostList} />
    </main>
  );
}
