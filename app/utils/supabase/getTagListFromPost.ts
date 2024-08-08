import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import { POST_TAG_TABLE, TAG_JOIN_ATTR } from ".";

export default async function getTagListFromPost({
  supabaseClient,
  postId,
}: {
  supabaseClient: SupabaseClient<Database, "public">;
  postId: string;
}) {
  return (
    await supabaseClient
      .from(POST_TAG_TABLE)
      .select(TAG_JOIN_ATTR)
      .eq("post_id", postId)
      .order("created_at", { ascending: true })
  ).data?.map((tag) => ({
    ...tag.tags,
    isSpoiler: tag.is_spoiler,
  }));
}
