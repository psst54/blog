import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import { POST_SUMMARY_ATTR, POST_TABLE } from ".";

export async function getSubBlogCategory({
  supabaseClient,
  subBlogId,
}: {
  supabaseClient: SupabaseClient<Database>;
  subBlogId: string;
}) {
  const { data: postData, error: postError } = await supabaseClient
    .from(POST_TABLE)
    .select(POST_SUMMARY_ATTR + ", parent_id") // [todo] 어디서 호출되는지 보고 고치기
    .order("custom_order")
    .order("created_at")
    .eq("sub_blog", subBlogId);

  if (postError) throw new Error();

  return postData;
}
