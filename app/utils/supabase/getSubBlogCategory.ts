import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import type { Document } from "~/types/post";
import { POST_SUMMARY_ATTR, POST_TABLE } from ".";

export async function getSubBlogCategory({
  supabaseClient,
  subBlogId,
}: {
  supabaseClient: SupabaseClient<Database>;
  subBlogId: string;
}) {
  const { data, error } = await supabaseClient
    .from(POST_TABLE)
    .select(POST_SUMMARY_ATTR + ", parent_id") // [todo] 어디서 호출되는지 보고 고치기
    .order("custom_order")
    .order("created_at")
    .eq("sub_blog", subBlogId)
    .returns<Document[]>();

  if (error) {
    return [];
  }

  return data;
}
