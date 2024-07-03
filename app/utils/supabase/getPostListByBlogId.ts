import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import { POST_SUMMARY_ATTR, POST_TABLE } from ".";

export async function getPostListByBlogId({
  supabase,
  subBlogId,
}: {
  supabase: SupabaseClient<Database>;
  subBlogId: string;
}) {
  const { data: postData, error: postError } = await supabase
    .from(POST_TABLE)
    .select(POST_SUMMARY_ATTR)
    .order("custom_order")
    .order("created_at")
    .eq("sub_blog", subBlogId);

  if (postError) throw new Error();

  return postData;
}
