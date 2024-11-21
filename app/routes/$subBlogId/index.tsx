import { useEffect, useState } from "react";
import { Outlet, useLoaderData } from "@remix-run/react";

import toggleCategory from "./toggleCategory";
import fetchCategoryData from "./fetchCategoryData";

import type { Category } from "~/types";

import NavBar from "@components/NavBar";
import Page from "@components/Page";
import { mq } from "~/constants/size";

export { loader } from "./utils/loader";

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
    <Page
      navbar={
        <NavBar data={categoryData} onToggleCategory={onToggleCategory} />
      }
      body={
        <div css={{ padding: "0 1rem", [mq[1]]: { padding: "0 0.5rem" } }}>
          <Outlet context={categoryData} />
        </div>
      }
    />
  );
}
