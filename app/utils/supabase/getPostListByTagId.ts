import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import { POST_SUMMARY_ATTR, POST_TABLE, POST_TAG_TABLE } from ".";
import addTagListToPostList from "./addTagListToPostList";

export async function getPostListByTagId({
  supabaseClient,
  tagId,
}: {
  supabaseClient: SupabaseClient<Database, "public">;
  tagId: string;
}) {
  const postIdList = (
    await supabaseClient
      .from(POST_TAG_TABLE)
      .select("post_id")
      .eq("tag_id", tagId)
      .order("created_at", { ascending: false })
  ).data?.map((datum) => datum.post_id);

  const postList = await Promise.all(
    postIdList?.map(
      async (id: string) =>
        (
          await supabaseClient
            .from(POST_TABLE)
            .select(POST_SUMMARY_ATTR)
            .eq("id", id)
            .single()
        ).data
    )
  );

  return await addTagListToPostList({
    supabaseClient,
    postList,
  });
}
