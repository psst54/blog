import type { LoaderArgs } from "@remix-run/cloudflare";

import type { Env } from "~/types";
import { type Post, DocumentType } from "~/types/post";

import { createClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import { getPostById } from "@utils/supabase/getPostById";
import { getChildPostList } from "@utils/supabase/getChildPostList";
import parse from "../parse";

function isNormalPost(data: Post) {
  return data.type === DocumentType.Post;
}

export async function loader({ context, params }: LoaderArgs) {
  const { SUPABASE_URL, SUPABASE_KEY } = context.env as Env;
  const supabaseClient = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);

  const subBlogId = params.subBlogId!;
  const postId = params.postId!;

  const postData = await getPostById({ supabaseClient, postId });

  if (!postData) {
    return { postData: null };
  }

  if (isNormalPost(postData)) {
    return {
      postData,
      parsedContent: await parse("# Table Of Contents\n" + postData.content),
    };
  }

  return {
    postData,
    childPostList: await getChildPostList({
      supabaseClient,
      subBlogId,
      parentId: postId,
    }),
  };
}
