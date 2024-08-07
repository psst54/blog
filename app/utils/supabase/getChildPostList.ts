import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import type { Post } from "~/types";
import { POST_SUMMARY_ATTR, POST_TABLE } from ".";
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
    .returns<Post[]>();

  if (error) {
    return [];
  }
  return await addTagListToPostList({
    supabaseClient,
    postList: data,
  });
}
