import type { LoaderArgs } from "@remix-run/cloudflare";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";

import type { Env } from "~/types";
import type { Document } from "~/types/post";
import { POST_SUMMARY_ATTR, POST_TABLE } from "~/constants/supabase";

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
    .returns<Document[]>();

  const searchResult = await addTagListToPostList({
    supabaseClient,
    postList: data,
  });

  return { searchResult };
}
