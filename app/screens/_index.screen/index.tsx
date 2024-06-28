import type { V2_MetaFunction } from "@remix-run/cloudflare";

import Content from "./Content";

import { background } from "@styles/main";
import type { Post } from "~/types";
import NavBar from "~/components/NavBar";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "PSST54's log" },
    { name: "description", content: "PSST54의 블로그" },
  ];
};

export default function Index({ recentPosts }: { recentPosts: Post[] }) {
  return (
    <main css={background}>
      <NavBar />
      <Content posts={recentPosts} />
    </main>
  );
}
