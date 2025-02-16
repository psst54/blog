import { useLoaderData } from "@remix-run/react";
import type { Document } from "~/types/post";

import Page from "@components/Page";
import PostDatabase from "../$subBlogId.$postId/components/PostDatabase";
import { mq } from "~/constants/size";

export { loader } from "./utils/loader";
export { meta } from "./utils/meta";

export default function Index() {
  const postList: Document[] = useLoaderData();

  return (
    <Page>
      <div css={{ padding: "0 1rem", [mq[1]]: { padding: "0 0.5rem" } }}>
        <PostDatabase posts={postList} />
      </div>
    </Page>
  );
}
