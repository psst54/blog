import type { LoaderArgs } from "@remix-run/cloudflare";
import { type Env } from "~/types";

import { createClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import { POST_SUMMARY_ATTR, POST_TABLE } from "~/utils/supabase";

export async function loader({ context, params }: LoaderArgs) {
  const { SUPABASE_URL, SUPABASE_KEY } = context.env as Env;
  const supabaseClient = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);

  const searchString = "remix";

  const { data, error } = await supabaseClient
    .from(POST_TABLE)
    .select(POST_SUMMARY_ATTR)
    .or(
      `title.ilike.%${searchString}%, sub_title.ilike.%${searchString}%, content.ilike.%${searchString}%`
    );

  return { searchResult: data };
}
