import { createClient } from "@supabase/supabase-js";
import { buildTree } from "@functions/category";
import { getSubBlogCategory } from "@utils/supabase/getSubBlogCategory";
import type { Database } from "@supabase/types";
import type { Post } from "~/types";

export default async function fetchCategoryData(
  subBlogId: string,
  supabaseUrl: string,
  supabaseKey: string
) {
  const supabaseClient = createClient<Database>(supabaseUrl, supabaseKey);
  const postList: Post[] = await getSubBlogCategory({
    supabaseClient,
    subBlogId,
  });

  return buildTree(postList);
}
