import { useLoaderData } from "@remix-run/react";
import type { Post } from "~/types";

import NavBar from "@components/NavBar";
import Page from "@components/Page";
import PostDatabase from "../$subBlogId.$postId/components/PostDatabase";
import { mq } from "~/constants/size";

export { loader } from "./utils/loader";
export { meta } from "./utils/meta";

export default function Index() {
  const postList: Post[] = useLoaderData();

  return (
    <Page
      navbar={<NavBar />}
      body={
        <div css={{ padding: "0 1rem", [mq[1]]: { padding: "0 0.5rem" } }}>
          <PostDatabase posts={postList} />
        </div>
      }
    />
  );
}
