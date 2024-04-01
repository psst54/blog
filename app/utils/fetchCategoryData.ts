import { createClient } from "@supabase/supabase-js";
import type { Dispatch, SetStateAction } from "react";
import { buildTree } from "~/functions/category";
import { getPostsByBlogId } from "~/functions/supabase";
import type { Database } from "~/supabase/types";
import type { Category } from "~/types";

export async function fetchCategoryData(
  subBlogId: string,
  supabaseUrl: string,
  supabaseKey: string,
  setCategoryData: Dispatch<SetStateAction<Category[]>>
) {
  const supabase = createClient<Database>(supabaseUrl, supabaseKey);
  const categoryRawData = await getPostsByBlogId({
    supabase,
    subBlogId,
  });
  setCategoryData(buildTree(categoryRawData));
}
