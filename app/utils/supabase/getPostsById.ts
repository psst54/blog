import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import { POST_TABLE } from ".";

export async function getPostsById({
  supabase,
  subBlogId,
  postId,
}: {
  supabase: SupabaseClient<Database, "public", any>;
  subBlogId: string;
  postId: string;
}) {
  const { data: postData, error: postError } = await supabase
    .from(POST_TABLE)
    .select(
      "title, sub_title, tags, id, thumbnail, sub_blog, created_at, emoji"
    )
    .eq("sub_blog", subBlogId)
    .eq("parent_id", postId)
    .order("created_at", { ascending: false });

  if (postError) throw new Error();

  return postData;
}
