import type { LoaderArgs } from "@remix-run/cloudflare";
import { NORMAL_PAGE, type Env, type Post } from "~/types";

import { createClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import { getPostById } from "@utils/supabase/getPostById";
import { getPostsById } from "@utils/supabase/getPostsById";
import parse from "../parse";

function isNormalPost(data: Post) {
  return data.type === NORMAL_PAGE;
}

export async function loader({ context, params }: LoaderArgs) {
  const { SUPABASE_URL, SUPABASE_KEY } = context.env as Env;
  const supabaseClient = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);

  const subBlogId = params.subBlogId!;
  const postId = params.postId!;

  const postData = await getPostById({ supabaseClient, postId });

  if (isNormalPost(postData)) {
    return {
      ...postData,
      content: await parse("# Table Of Contents\n" + postData.content),
    };
  }

  return {
    ...postData,
    posts: await getPostsById({ supabaseClient, subBlogId, postId }),
  };
}
