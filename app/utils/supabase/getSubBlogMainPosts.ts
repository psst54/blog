import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import { POST_SUMMARY_ATTR_LIST, POST_TABLE } from ".";

export async function getSubBlogMainPosts({
  supabase,
  subBlogId,
}: {
  supabase: SupabaseClient<Database, "public", any>;
  subBlogId: string;
}) {
  const { data: postData, error: postError } = await supabase
    .from(POST_TABLE)
    .select(POST_SUMMARY_ATTR_LIST.join(", "))
    .eq("sub_blog", subBlogId)
    .is("parent_id", null)
    .order("created_at", { ascending: false });

  if (postError) throw new Error();

  return postData;
}
