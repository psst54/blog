import type { Env, Post } from "~/types";
import type { LoaderArgs } from "@remix-run/cloudflare";

import { createClient } from "@supabase/supabase-js";
import { getSubBlogInfo, getSubBlogMainPosts } from "~/functions";

interface Database extends Post {
  posts: Post[];
}

export async function loader({ context, params }: LoaderArgs) {
  const subBlogId = params.subBlogId!;
  const { SUPABASE_URL, SUPABASE_KEY } = context.env as Env;
  const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);

  const databaseData = await getSubBlogMainPosts({ supabase, subBlogId });
  const blogData = await getSubBlogInfo({ supabase, subBlogId });

  return {
    content: {
      title: blogData.title,
      subTitle: blogData.description,
      posts: databaseData,
    },
  };
}
