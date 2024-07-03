import { createClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import { getSitemapData } from "@utils/supabase/getSitemapData";

export async function sitemap({ config }) {
  const supabaseClient = createClient<Database>(
    config.SUPABASE_URL,
    config.SUPABASE_KEY
  );

  return getSitemapData({ supabaseClient }).then((post) =>
    post.map((post) => ({
      loc: `/${post.sub_blog}/${post.id}`,
      lastmod: post.last_edited_at,
    }))
  );
}
