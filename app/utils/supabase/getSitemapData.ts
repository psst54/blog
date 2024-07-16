import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import type { Post } from "~/types";
import { POST_TABLE } from ".";

const SITEMAP_ATTR_LIST = ["id", "sub_blog", "last_edited_at"];

export async function getSitemapData({
  supabaseClient,
}: {
  supabaseClient: SupabaseClient<Database, "public">;
}) {
  const { data, error } = await supabaseClient
    .from(POST_TABLE)
    .select(SITEMAP_ATTR_LIST.join(", "))
    .returns<Post[]>();

  if (error) {
    return [];
  }

  return data;
}
