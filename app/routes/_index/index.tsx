import { useLoaderData } from "@remix-run/react";
import type { Category, Post, SupabaseKey } from "~/types";

import NavBar from "@components/NavBar";
import Page from "@components/Page";
import Content from "./components/Content";
import { useEffect, useState } from "react";
import fetchCategoryData from "../$subBlogId/fetchCategoryData";
import toggleCategory from "../$subBlogId/toggleCategory";

export { loader } from "./utils/loader";
export { meta } from "./utils/meta";

export default function Index() {
  const {
    recentPostList,
    pinnedPostList,
    supabaseKey,
  }: {
    recentPostList: Post[];
    pinnedPostList: Post[];
    supabaseKey: SupabaseKey;
  } = useLoaderData();

  const [categoryData, setCategoryData] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCategoryData(
        "cse",
        supabaseKey.SUPABASE_URL,
        supabaseKey.SUPABASE_KEY
      );
      setCategoryData(data);
    }

    fetchData();
  }, [supabaseKey]);

  const onToggleCategory = (id: string) => {
    setCategoryData(toggleCategory(id, categoryData));
  };

  return (
    <Page
      navbar={
        <NavBar
          data={categoryData}
          onToggleCategory={onToggleCategory}
          supabaseKey={supabaseKey}
        />
      }
      body={
        <Content
          recentPostList={recentPostList}
          pinnedPostList={pinnedPostList}
        />
      }
    />
  );
}
