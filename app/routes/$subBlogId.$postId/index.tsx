import { useLoaderData, useOutletContext } from "@remix-run/react";

import { type Category, DocumentType } from "~/types/post";

import PostHeader from "~/components/PostHeader";
import PostContent from "~/components/PostContent";
import PostDatabase from "./components/PostDatabase";
import Comment from "./components/Comment";

export { loader } from "./utils/loader";
export { meta } from "./utils/meta";
export { sitemap } from "./utils/sitemap";

export default function PostPage() {
  const { postData, parsedContent, childPostList } = useLoaderData();
  const categoryData: Category[] = useOutletContext();

  if (!postData) {
    return <></>;
  }

  return (
    <div>
      <PostHeader
        id={postData.id}
        title={postData.title}
        subTitle={postData?.sub_title}
        tags={postData?.tags}
        postDate={postData?.created_at}
        categoryData={categoryData}
      />
      {postData.type === DocumentType.Post && (
        <PostContent content={parsedContent} />
      )}
      {postData.type === DocumentType.Directory && (
        <PostDatabase posts={childPostList} />
      )}

      <hr css={{ margin: "2rem 0" }} />
      <Comment id={postData?.id} />
    </div>
  );
}
