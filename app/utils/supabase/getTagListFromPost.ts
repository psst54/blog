import type { SupabaseClient } from "@supabase/supabase-js";

import type { Tag } from "~/types/post";
import type { Database } from "~/types/supabase";
import { POST_TAG_TABLE, TAG_JOIN_ATTR } from "~/constants/supabase";

export default async function getTagListFromPost({
  supabaseClient,
  postId,
}: {
  supabaseClient: SupabaseClient<Database, "public">;
  postId: string;
}): Promise<Tag[]> {
  const { data, error } = await supabaseClient
    .from(POST_TAG_TABLE)
    .select(TAG_JOIN_ATTR)
    .eq("post_id", postId)
    .order("created_at", { ascending: true })
    .returns<RawTag[]>();

  if (error || data === null) {
    return [];
  }

  return data.map((tag) => ({
    ...tag.tags,
    isSpoiler: tag.is_spoiler,
  }));
}

interface RawTag {
  is_spoiler: boolean;
  tags: { id: string; title: string; content: string[] };
}
