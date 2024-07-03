import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import { POST_TABLE } from ".";

export async function getPostById({
  supabase,
  postId,
}: {
  supabase: SupabaseClient<Database, "public">;
  postId: string;
}) {
  const { data: postData, error: postError } = await supabase
    .from(POST_TABLE)
    .select(
      "id, title, sub_title, content, tags, type, created_at, thumbnail, emoji"
    )
    .eq("id", postId)
    .single();

  if (postError) throw new Error();

  return postData;
}
