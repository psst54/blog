import type { SupabaseClient } from "@supabase/supabase-js";

import type { Document } from "~/types/post";
import { buildTree } from "~/functions/category";
import { getSubBlogCategory } from "~/utils/supabase/getSubBlogCategory";

export default async function fetchCategoryData({
  supabaseClient,
  subBlogId,
}: {
  supabaseClient: SupabaseClient;
  subBlogId: string;
}) {
  const documentList: Document[] = await getSubBlogCategory({
    supabaseClient,
    subBlogId,
  });

  return buildTree(documentList);
}
