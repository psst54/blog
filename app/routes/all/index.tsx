import { useLoaderData } from "@remix-run/react";
import type { Post } from "~/types";

import NavBar from "@components/NavBar";
import { background, contentContainer } from "@styles/main";
import PostDatabase from "../$subBlogId.$postId/components/PostDatabase";

export { loader } from "./utils/loader";
export { meta } from "./utils/meta";

export default function Index() {
  const postList: Post[] = useLoaderData();

  return (
    <main css={background}>
      <NavBar />
      <div css={contentContainer}>
        <PostDatabase posts={postList} />
      </div>
    </main>
  );
}
