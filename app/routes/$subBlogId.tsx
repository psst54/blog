import { useEffect, useState } from "react";
import type { LoaderArgs, V2_MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import type { SitemapFunction } from "remix-sitemap";

import { createClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";

import SubBlogScreen from "@screens/$subBlogId.screen";
import { getSubBlogId } from "@functions/category";
import { getAllPosts } from "@functions/supabase";
import type { Category, Env } from "~/types";
import toggleCategory from "~/utils/toggleCategory";
import { fetchCategoryData } from "~/utils/fetchCategoryData";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "PSST54's log | sub blog" },
    { name: "description", content: "여기는 서브 블로그" },
  ];
};

export const loader = async ({ context, params }: LoaderArgs) => {
  const subBlogId = getSubBlogId({ params });
  try {
    return {
      subBlogId,
      supabaseUrl: (context.env as Env).SUPABASE_URL,
      supabaseKey: (context.env as Env).SUPABASE_KEY,
    };
  } catch (err) {
    return {
      subBlogId,
      supabaseUrl: (context.env as Env).SUPABASE_URL,
      supabaseKey: (context.env as Env).SUPABASE_KEY,
    };
  }
};

export const sitemap: SitemapFunction = async ({ config }) => {
  const supabase = createClient<Database>(
    config.SUPABASE_URL,
    config.SUPABASE_KEY
  );

  const posts = await getAllPosts({ supabase });

  return posts.map((post) => ({
    loc: `/${post.sub_blog}/${post.id}`,
    lastmod: post.last_edited_at,
  }));
};

export default function SubBlog() {
  const { subBlogId, supabaseUrl, supabaseKey } =
    useLoaderData<typeof loader>();
  const [categoryData, setCategoryData] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategoryData(subBlogId, supabaseUrl, supabaseKey, setCategoryData);
  }, [subBlogId, supabaseUrl, supabaseKey]);

  const onToggleCategory = (id: string) => {
    setCategoryData(toggleCategory(id, categoryData));
  };

  return (
    <SubBlogScreen
      categoryData={categoryData}
      data={categoryData}
      onToggleCategory={onToggleCategory}
    />
  );
}
