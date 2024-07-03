import type { LoaderArgs } from "@remix-run/cloudflare";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import type { Env } from "~/types";

import { getRecentPostList } from "@functions/supabase";

export async function loader({ context }: LoaderArgs) {
  const { SUPABASE_URL, SUPABASE_KEY } = context.env as Env;
  const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);

  return await getRecentPostList({ supabase, showAll: false });
}
