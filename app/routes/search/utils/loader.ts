import type { LoaderArgs } from "@remix-run/cloudflare";
import type { Post, Env } from "~/types";

import { createClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import { POST_SUMMARY_ATTR, POST_TABLE } from "@utils/supabase";
import addTagListToPostList from "@utils/supabase/addTagListToPostList";

export async function loader({ context, request }: LoaderArgs) {
  const { SUPABASE_URL, SUPABASE_KEY } = context.env as Env;
  const supabaseClient = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);

  const searchString = new URL(request.url).searchParams.get("string");

  const { data } = await supabaseClient
    .from(POST_TABLE)
    .select(POST_SUMMARY_ATTR)
    .or(
      `title.ilike.%${searchString}%, sub_title.ilike.%${searchString}%, content.ilike.%${searchString}%`
    )
    .returns<Post[]>();

  const searchResult = await addTagListToPostList({
    supabaseClient,
    postList: data,
  });

  return { searchResult };
}
