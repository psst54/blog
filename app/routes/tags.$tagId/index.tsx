import { useLoaderData } from "@remix-run/react";
import PostDatabase from "../$subBlogId.$postId/components/PostDatabase";
import TagHeader from "./components/TagHeader";

export { loader } from "./utils/loader";

export default function SubBlog() {
  const { tagData, postList } = useLoaderData();

  return (
    <>
      <TagHeader tagData={tagData} />
      <PostDatabase posts={postList} />
    </>
  );
}
