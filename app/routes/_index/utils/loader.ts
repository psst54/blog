import type { LoaderArgs } from "@remix-run/cloudflare";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import type { Env } from "~/types";

import { getRecentPostList } from "@utils/supabase/getRecentPostList";
import { getPinnedPostList } from "~/utils/supabase/getPinnedPostList";

export async function loader({ context }: LoaderArgs) {
  const { SUPABASE_URL, SUPABASE_KEY } = context.env as Env;
  const supabaseClient = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);

  const recentPostList = await getRecentPostList({
    supabaseClient,
    showAll: false,
  });

  const pinnedPostList = await getPinnedPostList({
    supabaseClient,
  });
  return {
    recentPostList,
    pinnedPostList,
    supabaseKey: { SUPABASE_URL, SUPABASE_KEY },
  };
}
