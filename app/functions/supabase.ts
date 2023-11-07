import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "@supabase/types";

export async function getPostById({
  supabase,
  postId,
}: {
  supabase: SupabaseClient<Database, "public", any>;
  postId: string;
}) {
  const { data: postData, error: postError } = await supabase
    .from("posts")
    .select("id, title, sub_title, content, tags, type, created_at")
    .eq("id", postId)
    .single();

  if (postError) throw new Error();

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
    .select("id, title, parent_id, type, sub_blog")
    .order("created_at")
    .eq("sub_blog", subBlogId);

  if (postError) throw new Error();

  return postData;
}

export async function getPostsById({
  supabase,
  subBlogId,
  postId,
}: {
  supabase: SupabaseClient<Database, "public", any>;
  subBlogId: string;
  postId: string | null;
}) {
  const { data: postData, error: postError } = await supabase
    .from("posts")
    .select("title, sub_title, tags, id, thumbnail, sub_blog, created_at")
    .eq("sub_blog", subBlogId)
    .eq("parent_id", postId)
    .order("created_at", { ascending: false });

  if (postError) throw new Error();

  return postData;
}

export async function getRecentPosts({
  supabase,
}: {
  supabase: SupabaseClient<Database, "public", any>;
}) {
  const { data: databaseData, error: databaseError } = await supabase
    .from("posts")
    .select("title, sub_title, tags, id, thumbnail, sub_blog")
    .order("created_at", { ascending: false })
    .eq("type", "post")
    .limit(10);

  if (databaseError) throw new Error();

  return databaseData;
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
