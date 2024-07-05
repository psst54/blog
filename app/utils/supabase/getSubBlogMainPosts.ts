import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import { POST_SUMMARY_ATTR, POST_TABLE } from ".";

export async function getSubBlogMainPosts({
  supabaseClient,
  subBlogId,
}: {
  supabaseClient: SupabaseClient<Database, "public", any>;
  subBlogId: string;
}) {
  const { data: postData, error: postError } = await supabaseClient
    .from(POST_TABLE)
    .select(POST_SUMMARY_ATTR)
    .eq("sub_blog", subBlogId)
    .is("parent_id", null)
    .order("created_at", { ascending: false });

  if (postError) {
    return null;
  }

  return postData;
}
