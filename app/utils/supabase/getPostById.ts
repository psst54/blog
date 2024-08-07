import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import type { Post } from "~/types";
import { POST_DETAIL_ATTR, POST_TABLE } from ".";
import getTagListFromPost from "./getTagListFromPost";

export async function getPostById({
  supabaseClient,
  postId,
}: {
  supabaseClient: SupabaseClient<Database, "public">;
  postId: string;
}) {
  const { data, error } = await supabaseClient
    .from(POST_TABLE)
    .select(POST_DETAIL_ATTR)
    .eq("id", postId)
    .single();

  const tagData = await getTagListFromPost({
    supabaseClient,
    postId,
  });

  if (error) {
    return null;
  }

  return {
    ...data,
    tags: tagData,
  } as unknown as Post; // [todo] : fix unknown
}
