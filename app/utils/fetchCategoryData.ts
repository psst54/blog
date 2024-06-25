import { createClient } from "@supabase/supabase-js";
import type { Dispatch, SetStateAction } from "react";
import { buildTree } from "~/functions/category";
import { getPostListByBlogId } from "~/functions/supabase";
import type { Database } from "~/supabase/types";
import type { Category, Post } from "~/types";

export async function fetchCategoryData(
  subBlogId: string,
  supabaseUrl: string,
  supabaseKey: string,
  setCategoryData: Dispatch<SetStateAction<Category[]>>
) {
  const supabase = createClient<Database>(supabaseUrl, supabaseKey);
  const postList: Post[] = await getPostListByBlogId({
    supabase,
    subBlogId,
  });

  setCategoryData(buildTree(postList));
}
