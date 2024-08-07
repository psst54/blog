import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import type { Post } from "~/types";

import getTagListFromPost from "./getTagListFromPost";

export default async function addTagListToPostList({
  supabaseClient,
  postList,
}: {
  supabaseClient: SupabaseClient<Database, "public">;
  postList: Post[];
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
  post: Post;
}): Promise<Post> {
  const tagData = await getTagListFromPost({
    supabaseClient,
    postId: post.id,
  });
  return { ...post, tags: tagData };
}
