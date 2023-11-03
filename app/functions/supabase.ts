import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "@supabase/types";

export async function getPosts({
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

export async function getRecentPosts({
  supabase,
}: {
  supabase: SupabaseClient<Database, "public", any>;
}) {
  const { data: databaseData, error: databaseError } = await supabase
    .from("posts")
    .select("title, sub_title, tags, id, thumbnail, sub_blog")
    .order("created_at", { ascending: false })
    .limit(10);

  if (databaseError) throw new Error();

  return databaseData;
}
