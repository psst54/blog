import { useEffect, useState } from "react";
import type { LoaderArgs, V2_MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import type { SitemapFunction } from "remix-sitemap";

import { createClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";

import SubBlogScreen from "@screens/$subBlogId.screen";
import { getSubBlogId, buildTree, spread } from "@functions/category";
import { getPostsByBlogId, getAllPosts } from "@functions/supabase";
import type { Category, Env } from "~/types";
import toggleCategory from "~/utils/toggleCategory";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "PSST54's log | sub blog" },
    { name: "description", content: "여기는 서브 블로그" },
  ];
};

export const loader = async ({ context, params }: LoaderArgs) => {
  const supabase = createClient<Database>(
    (context.env as Env).SUPABASE_URL,
    (context.env as Env).SUPABASE_KEY
  );

  const subBlogId = getSubBlogId({ params });
  try {
    const categoryRawData = await getPostsByBlogId({ supabase, subBlogId });
    return {
      categoryData: categoryRawData,
    };
  } catch (err) {
    return { categoryData: [] };
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
  const { categoryData: rawCategoryData } = useLoaderData<typeof loader>();
  const [categoryData, setCategoryData] = useState(buildTree(rawCategoryData));

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
