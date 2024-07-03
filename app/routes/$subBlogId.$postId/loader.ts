import type { LoaderArgs } from "@remix-run/cloudflare";
import type { Env } from "~/types";

import { createClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import { getPostById, getPostsById } from "@functions/supabase";
import parse from "./parse";

export async function loader({ context, params }: LoaderArgs) {
  const { SUPABASE_URL, SUPABASE_KEY } = context.env as Env;
  const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);

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
}
