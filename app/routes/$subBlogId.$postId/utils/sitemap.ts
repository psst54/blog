import type { SitemapFunction } from "remix-sitemap";
import { createClient } from "@supabase/supabase-js";
import { getSitemapData } from "~/utils/supabase/getSitemapData";

export const sitemap: SitemapFunction = async ({ config }) => {
  const supabaseClient = createClient(config.SUPABASE_URL, config.SUPABASE_KEY);

  return getSitemapData({ supabaseClient }).then((post) =>
    post.map((post) => ({
      loc: `/${post.sub_blog}/${post.id}`,
      lastmod: new Date(post.last_edited_at).toISOString(),
      changefreq: "weekly",
    }))
  );
};
