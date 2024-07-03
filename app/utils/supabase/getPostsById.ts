import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import { POST_SUMMARY_ATTR, POST_TABLE } from ".";

export async function getPostsById({
  supabaseClient,
  subBlogId,
  postId,
}: {
  supabaseClient: SupabaseClient<Database, "public", any>;
  subBlogId: string;
  postId: string;
}) {
  const { data: postData, error: postError } = await supabaseClient
    .from(POST_TABLE)
    .select(POST_SUMMARY_ATTR)
    .eq("sub_blog", subBlogId)
    .eq("parent_id", postId)
    .order("created_at", { ascending: false });

  if (postError) throw new Error();

  return postData;
}
