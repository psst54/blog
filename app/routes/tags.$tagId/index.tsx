import { useLoaderData } from "@remix-run/react";
import PostDatabase from "../$subBlogId.$postId/components/PostDatabase";

export { loader } from "./utils/loader";
// export { sitemap } from "./utils/sitemap";

export default function SubBlog() {
  const { postList } = useLoaderData();

  return <PostDatabase posts={postList} />;
}
