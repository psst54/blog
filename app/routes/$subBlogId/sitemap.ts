import type { SitemapFunction } from "remix-sitemap";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";

import { getAllPosts } from "@functions/index";

export async function sitemap({ config }): Promise<SitemapFunction> {
  const supabase = createClient<Database>(
    config.SUPABASE_URL,
    config.SUPABASE_KEY
  );

  const posts = await getAllPosts({ supabase });

  return posts.map((post) => ({
    loc: `/${post.sub_blog}/${post.id}`,
    lastmod: post.last_edited_at,
  }));
}
