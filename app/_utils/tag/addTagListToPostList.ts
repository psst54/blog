import type { SupabaseClient } from "@supabase/supabase-js";

import type { Document } from "~/types/post";
import type { Database } from "~/types/supabase";

import getTagListFromPost from "./getTagListFromPost";

async function addTagListToPost({
  supabaseClient,
  post,
}: {
  supabaseClient: SupabaseClient<Database, "public">;
  post: Document;
}): Promise<Document> {
  const tagData = await getTagListFromPost({
    supabaseClient,
    postId: post.id,
  });
  return { ...post, tags: tagData };
}

export default async function addTagListToPostList({
  supabaseClient,
  postList,
}: {
  supabaseClient: SupabaseClient<Database, "public">;
  postList: Document[];
}) {
  return await Promise.all(
    postList.map((post) => addTagListToPost({ supabaseClient, post }))
  );
}
