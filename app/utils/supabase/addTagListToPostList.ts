import type { SupabaseClient } from "@supabase/supabase-js";

import type { Document } from "~/types/post";
import type { Database } from "~/types/supabase";

import getTagListFromPost from "./getTagListFromPost";

export default async function addTagListToPostList({
  supabaseClient,
  postList,
}: {
  supabaseClient: SupabaseClient<Database, "public">;
  postList: Document[];
}) {
  const postListWithTags = postList.map((post) =>
    addTagListToPost({ supabaseClient, post })
  );
  return await Promise.all(postListWithTags);
}

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
