import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import type { Post } from "~/types";
import { POST_SUMMARY_ATTR_LIST, POST_TABLE } from ".";

export async function getRecentPostList({
  supabaseClient,
  subBlogId = "cse",
  count = 10,
  showAll = true,
}: {
  supabaseClient: SupabaseClient<Database, "public">;
  subBlogId?: string;
  count?: number;
  showAll?: boolean;
}): Promise<Post[]> {
  const { data: databaseData, error: databaseError } = await supabaseClient
    .from(POST_TABLE)
    .select(POST_SUMMARY_ATTR_LIST.join(", "))
    .in("show_main", showAll ? [true, false] : [true])
    .eq("sub_blog", subBlogId)
    .eq("type", "post")
    .order("created_at", { ascending: false })
    .limit(count)
    .returns<Post[]>();

  if (databaseError) return [];

  return databaseData;
}
