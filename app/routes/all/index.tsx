import { useLoaderData } from "@remix-run/react";
import type { Post } from "~/types";

import NavBar from "@components/NavBar";
import Page from "@components/Page";
import PostDatabase from "../$subBlogId.$postId/components/PostDatabase";

export { loader } from "./utils/loader";
export { meta } from "./utils/meta";

export default function Index() {
  const postList: Post[] = useLoaderData();

  return <Page navbar={<NavBar />} body={<PostDatabase posts={postList} />} />;
}
