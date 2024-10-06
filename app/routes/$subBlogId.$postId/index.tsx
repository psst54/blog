import { useLoaderData, useOutletContext } from "@remix-run/react";
import { DIRECTORY_PAGE, NORMAL_PAGE, type Category } from "~/types";

import PostHeader from "@components/PostHeader";
import PostContent from "@components/PostContent";
import PostDatabase from "./components/PostDatabase";

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
    <div
      css={{
        wordBreak: "break-word",
      }}
    >
      <PostHeader
        id={postData.id}
        title={postData.title}
        subTitle={postData?.sub_title}
        tags={postData?.tags}
        postDate={postData?.created_at}
        categoryData={categoryData}
      />
      {postData.type === NORMAL_PAGE && <PostContent content={parsedContent} />}
      {postData.type === DIRECTORY_PAGE && (
        <PostDatabase posts={childPostList} />
      )}
    </div>
  );
}
