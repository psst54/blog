import { useLoaderData } from "@remix-run/react";
import type { Post } from "~/types";

import NavBar from "@components/NavBar";
import Content from "./Content";
import { background } from "@styles/main";

export { loader } from "./loader";
export { meta } from "./meta";

export default function Index() {
  const recentPostList: Post[] = useLoaderData();

  return (
    <main css={background}>
      <NavBar />
      <Content postList={recentPostList} />
    </main>
  );
}
