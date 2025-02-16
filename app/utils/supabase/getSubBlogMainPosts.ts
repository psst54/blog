import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";

import type { Document } from "~/types/post";
import { POST_SUMMARY_ATTR, POST_TABLE } from "~/constants/supabase";

import addTagListToPostList from "./addTagListToPostList";

export async function getSubBlogMainPosts({
  supabaseClient,
  subBlogId,
}: {
  supabaseClient: SupabaseClient<Database, "public", any>;
  subBlogId: string;
}) {
  const { data: postData, error: postError } = await supabaseClient
    .from(POST_TABLE)
    .select(POST_SUMMARY_ATTR)
    .eq("sub_blog", subBlogId)
    .is("parent_id", null)
    .order("created_at", { ascending: false })
    .returns<Document[]>();

  if (postError || postData === null) {
    return [];
  }

  return await addTagListToPostList({
    supabaseClient,
    postList: postData,
  });
}
