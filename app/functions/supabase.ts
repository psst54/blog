import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";

function getTitle(emoji: string | null, title: string) {
  if (!emoji) {
    return title;
  }
  return emoji + " " + title;
}

export async function getAllPosts({
  supabase,
}: {
  supabase: SupabaseClient<Database, "public", any>;
}) {
  const { data: postData, error: postError } = await supabase
    .from("posts")
    .select(
      "id, title, sub_title, content, tags, type, sub_blog, created_at, last_edited_at, emoji"
    )
    .eq("type", "post");

  if (postError) throw new Error();

  return postData?.map((post) => ({
    ...post,
    title: getTitle(post.emoji, post.title),
  }));
}
export async function getPostById({
  supabase,
  postId,
}: {
  supabase: SupabaseClient<Database, "public", any>;
  postId: string;
}) {
  const { data: postData, error: postError } = await supabase
    .from("posts")
    .select(
      "id, title, sub_title, content, tags, type, created_at, thumbnail, emoji"
    )
    .eq("id", postId)
    .single();

  if (postError) throw new Error();

  postData.title = getTitle(postData.emoji, postData.title);
  return postData;
}

export async function getPostsByBlogId({
  supabase,
  subBlogId,
}: {
  supabase: SupabaseClient<Database, "public", any>;
  subBlogId: string;
}) {
  const { data: postData, error: postError } = await supabase
    .from("posts")
    .select("id, title, parent_id, type, sub_blog, emoji")
    .order("custom_order")
    .order("created_at")
    .eq("sub_blog", subBlogId);

  if (postError) throw new Error();

  return postData?.map((post) => ({
    ...post,
    title: getTitle(post.emoji, post.title),
  }));
}

export async function getPostsById({
  supabase,
  subBlogId,
  postId,
}: {
  supabase: SupabaseClient<Database, "public", any>;
  subBlogId: string;
  postId: string;
}) {
  const { data: postData, error: postError } = await supabase
    .from("posts")
    .select(
      "title, sub_title, tags, id, thumbnail, sub_blog, created_at, emoji"
    )
    .eq("sub_blog", subBlogId)
    .eq("parent_id", postId)
    .order("created_at", { ascending: false });

  if (postError) throw new Error();

  return postData?.map((post) => ({
    ...post,
    title: getTitle(post.emoji, post.title),
  }));
}

export async function getSubBlogMainPosts({
  supabase,
  subBlogId,
}: {
  supabase: SupabaseClient<Database, "public", any>;
  subBlogId: string;
}) {
  const { data: postData, error: postError } = await supabase
    .from("posts")
    .select(
      "title, sub_title, tags, id, thumbnail, sub_blog, created_at, emoji"
    )
    .eq("sub_blog", subBlogId)
    .is("parent_id", null)
    .order("created_at", { ascending: false });

  if (postError) throw new Error();

  return postData?.map((post) => ({
    ...post,
    title: getTitle(post.emoji, post.title),
  }));
}

export async function getRecentPosts({
  supabase,
  subBlogId,
  count = 10,
  showAll = true,
}: {
  supabase: SupabaseClient<Database, "public", any>;
  subBlogId?: string | undefined;
  count?: number | undefined;
  showAll?: boolean;
}) {
  if (!subBlogId) {
    const { data: databaseData, error: databaseError } = await supabase
      .from("posts")
      .select("title, sub_title, tags, id, thumbnail, sub_blog, emoji")
      .in("show_main", showAll ? [true, false] : [true])
      .eq("type", "post")
      .order("created_at", { ascending: false })
      .limit(count);

    if (databaseError) throw new Error();

    return databaseData?.map((post) => ({
      ...post,
      title: getTitle(post.emoji, post.title),
    }));
  } else {
    const { data: databaseData, error: databaseError } = await supabase
      .from("posts")
      .select("title, sub_title, tags, id, thumbnail, sub_blog, emoji")
      .in("show_main", showAll ? [true, false] : [true])
      .eq("sub_blog", subBlogId)
      .eq("type", "post")
      .order("created_at", { ascending: false })
      .limit(count);

    if (databaseError) throw new Error();

    return databaseData?.map((post) => ({
      ...post,
      title: getTitle(post.emoji, post.title),
    }));
  }
}

export async function getSubBlogInfo({
  supabase,
  subBlogId,
}: {
  supabase: SupabaseClient<Database, "public", any>;
  subBlogId: string;
}) {
  const { data: databaseData, error: databaseError } = await supabase
    .from("subBlogs")
    .select("title, description")
    .eq("id", subBlogId)
    .single();

  if (databaseError) throw new Error();

  return databaseData;
}
