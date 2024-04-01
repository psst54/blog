import { useEffect, useState } from "react";
import type { LoaderArgs, V2_MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";

import IndexScreen from "@screens/_index.screen";
import { getSubBlogId } from "@functions/category";
import { getRecentPosts } from "@functions/supabase";
import type { Env, Post, Category } from "~/types";
import toggleCategory from "~/utils/toggleCategory";
import { fetchCategoryData } from "~/utils/fetchCategoryData";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "PSST54's log" },
    { name: "description", content: "PSST54의 블로그" },
  ];
};

export const loader = async ({ context, params }: LoaderArgs) => {
  const supabase = createClient<Database>(
    (context.env as Env).SUPABASE_URL,
    (context.env as Env).SUPABASE_KEY
  );

  const subBlogId = getSubBlogId({ params });
  try {
    const recentPosts = await getRecentPosts({ supabase, showAll: false });

    return {
      recentPosts: recentPosts,
      subBlogId,
      supabaseUrl: (context.env as Env).SUPABASE_URL,
      supabaseKey: (context.env as Env).SUPABASE_KEY,
    };
  } catch (err) {
    return {
      recentPosts: [],
      subBlogId,
      supabaseUrl: (context.env as Env).SUPABASE_URL,
      supabaseKey: (context.env as Env).SUPABASE_KEY,
    };
  }
};

export default function Index() {
  const {
    recentPosts,
    subBlogId,
    supabaseUrl,
    supabaseKey,
  }: {
    recentPosts: Post[];
    subBlogId: string;
    supabaseUrl: string;
    supabaseKey: string;
  } = useLoaderData<typeof loader>();

  const [categoryData, setCategoryData] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategoryData(subBlogId, supabaseUrl, supabaseKey, setCategoryData);
  }, [subBlogId, supabaseUrl, supabaseKey]);

  const onToggleCategory = (id: string) => {
    setCategoryData(toggleCategory(id, categoryData));
  };
  return (
    <IndexScreen
      recentPosts={recentPosts}
      categoryData={categoryData}
      onToggleCategory={onToggleCategory}
    />
  );
}
