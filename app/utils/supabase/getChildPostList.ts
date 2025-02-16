import type { SupabaseClient } from "@supabase/supabase-js";

import type { Document } from "~/types/post";
import type { Database } from "~/types/supabase";
import { POST_SUMMARY_ATTR, POST_TABLE } from "~/constants/supabase";

import addTagListToPostList from "./addTagListToPostList";

export async function getChildPostList({
  supabaseClient,
  subBlogId,
  parentId,
}: {
  supabaseClient: SupabaseClient<Database, "public", any>;
  subBlogId: string;
  parentId: string;
}) {
  const { data, error } = await supabaseClient
    .from(POST_TABLE)
    .select(POST_SUMMARY_ATTR)
    .eq("sub_blog", subBlogId)
    .eq("parent_id", parentId)
    .order("created_at", { ascending: false })
    .returns<Document[]>();

  if (error || data === null) {
    return [];
  }
  return await addTagListToPostList({
    supabaseClient,
    postList: data,
  });
}
