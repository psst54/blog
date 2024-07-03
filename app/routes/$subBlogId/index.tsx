import { useEffect, useState } from "react";
import { Outlet, useLoaderData } from "@remix-run/react";

import toggleCategory from "./toggleCategory";
import fetchCategoryData from "./fetchCategoryData";

import type { Category } from "~/types";

import NavBar from "~/components/NavBar";
import { background, contentContainer } from "@styles/main";

export { loader } from "./loader";
export { sitemap } from "./sitemap";

export default function SubBlog() {
  const { subBlogId, supabaseUrl, supabaseKey } = useLoaderData();
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
