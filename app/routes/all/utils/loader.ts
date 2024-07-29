import type { LoaderArgs } from "@remix-run/cloudflare";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import type { Env } from "~/types";

import { getPostList } from "~/utils/supabase/getPostList";

export async function loader({ context }: LoaderArgs) {
  const { SUPABASE_URL, SUPABASE_KEY } = context.env as Env;
  const supabaseClient = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);

  return await getPostList({ supabaseClient });
}
