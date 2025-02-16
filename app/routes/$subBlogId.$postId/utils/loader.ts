import type { LoaderArgs } from "@remix-run/cloudflare";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";

import type { Env } from "~/types";
import { type Document, DocumentType } from "~/types/post";

import { getPostById } from "~/utils/supabase/getPostById";
import { getChildPostList } from "~/utils/supabase/getChildPostList";
import parse from "../parse";

function isNormalPost(data: Document) {
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
