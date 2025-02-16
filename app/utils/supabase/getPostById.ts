import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";

import type { Document } from "~/types/post";
import {
  POST_DETAIL_ATTR,
  POST_SUMMARY_ATTR,
  POST_TABLE,
} from "~/constants/supabase";

import getTagListFromPost from "./getTagListFromPost";

export async function getPostById({
  supabaseClient,
  postId,
  isDetail = true,
}: {
  supabaseClient: SupabaseClient<Database, "public">;
  postId: string;
  isDetail?: boolean;
}): Promise<Document | null> {
  const { data, error } = await supabaseClient
    .from(POST_TABLE)
    .select(isDetail ? POST_DETAIL_ATTR : POST_SUMMARY_ATTR)
    .eq("id", postId)
    .returns<Document>()
    .single();

  const tagData = await getTagListFromPost({
    supabaseClient,
    postId,
  });

  if (error || data === null) {
    return null;
  }

  return {
    ...(data as never as Document), // [todo] fix this
    tags: tagData,
  };
}
