import { useEffect, useState } from "react";
import type { LoaderArgs } from "@remix-run/cloudflare";
import { Outlet, useLoaderData } from "@remix-run/react";
import type { SitemapFunction } from "remix-sitemap";

import { createClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";

import { getAllPosts } from "@functions/index";
import toggleCategory from "./toggleCategory";
import fetchCategoryData from "./fetchCategoryData";

import type { Category, Env } from "~/types";

import NavBar from "~/components/NavBar";
import { background, contentContainer } from "@styles/main";

export const loader = async ({ context, params }: LoaderArgs) => {
  const subBlogId = params.subBlogId!;
  return {
    subBlogId,
    supabaseUrl: (context.env as Env).SUPABASE_URL,
    supabaseKey: (context.env as Env).SUPABASE_KEY,
  };
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
    async function fetchData() {
      const data = await fetchCategoryData(subBlogId, supabaseUrl, supabaseKey);
      setCategoryData(data);
    }

    fetchData();
  }, [subBlogId, supabaseUrl, supabaseKey]);

  const onToggleCategory = (id: string) => {
    setCategoryData(toggleCategory(id, categoryData));
  };

  return (
    <main css={background}>
      <NavBar data={categoryData} onToggleCategory={onToggleCategory} />

      <div css={contentContainer}>
        <Outlet context={categoryData} />
      </div>
    </main>
  );
}
