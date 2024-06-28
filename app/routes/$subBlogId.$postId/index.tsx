import type { LoaderArgs, V2_MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData, useOutletContext } from "@remix-run/react";
import type { Category, Env } from "~/types";

import { createClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import { getPostById, getPostsById } from "@functions/supabase";
import getMetaData from "@utils/getMetaData";
import parse from "./parse";

import PostHeader from "~/components/PostHeader";
import PostContent from "~/components/PostContent";
import PostDatabase from "./PostDatabase";

export const meta: V2_MetaFunction<typeof loader> = ({ data: postData }) => {
  return getMetaData({
    title: postData?.title,
    subTitle: postData?.sub_title,
    tagList: postData?.tags,
    thumbnail: postData?.thumbnail,
  });
};

export const loader = async ({ context, params }: LoaderArgs) => {
  const supabase = createClient<Database>(
    (context.env as Env).SUPABASE_URL,
    (context.env as Env).SUPABASE_KEY
  );

  const subBlogId = params.subBlogId!;
  const postId = params.postId!;

  const postData = await getPostById({ supabase, postId });

  if (postData.type === "post") {
    return {
      ...postData,
      content: await parse("# Table Of Contents\n" + postData.content),
    };
  }

  return {
    ...postData,
    posts: await getPostsById({ supabase, subBlogId, postId }),
  };
};

export default function PostPage() {
  const postData = useLoaderData<typeof loader>();
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
      {postData.type === "post" && <PostContent content={postData.content} />}
      {postData.type === "database" && <PostDatabase posts={postData.posts} />}
    </div>
  );
}
