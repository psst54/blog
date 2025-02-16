import type { Env } from "~/types";
import { type Directory } from "~/types/post";

import type { LoaderArgs } from "@remix-run/cloudflare";

import { createClient } from "@supabase/supabase-js";
import { getSubBlogMainPosts } from "@utils/supabase/getSubBlogMainPosts";
import { getSubBlogInfo } from "@utils/supabase/getSubBlogInfo";

export async function loader({ context, params }: LoaderArgs) {
  const subBlogId = params.subBlogId!;
  const { SUPABASE_URL, SUPABASE_KEY } = context.env as Env;
  const supabaseClient = createClient<Directory>(SUPABASE_URL, SUPABASE_KEY);

  const databaseData = await getSubBlogMainPosts({ supabaseClient, subBlogId });
  const blogData = await getSubBlogInfo({ supabaseClient, subBlogId });

  return {
    content: {
      title: blogData.title,
      subTitle: blogData.description,
      posts: databaseData,
    },
  };
}
