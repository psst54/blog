import { useEffect, useState } from "react";
import { useOutletContext } from "@remix-run/react";
import { createClient } from "@supabase/supabase-js";

import type { Category, Document } from "~/types/post";

import NavBar from "@components/NavBar";
import Page from "@components/Page";
import Content from "./_components/Content";
import fetchCategoryData from "../$subBlogId/fetchCategoryData";
import toggleCategory from "../$subBlogId/toggleCategory";
import { getRecentPostList } from "./_utils/getRecentPostList";
import { getPinnedPostList } from "./_utils/getPinnedPostList";

export { meta } from "./_utils/meta";

export default function Index() {
  const { supabaseCredential } = useOutletContext();
  const [recentPostList, setRecentPostList] = useState<Document[]>([]);
  const [pinnedPostList, setPinnedPostList] = useState<Document[]>([]);
  const [categoryData, setCategoryData] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchData() {
      const supabaseClient = createClient(
        supabaseCredential.url,
        supabaseCredential.key
      );

      setRecentPostList(
        await getRecentPostList({
          supabaseClient,
          showAll: false,
        })
      );
      setPinnedPostList(
        await getPinnedPostList({
          supabaseClient,
        })
      );
      setCategoryData(
        await fetchCategoryData({ supabaseClient, subBlogId: "cse" })
      );
    }

    fetchData();
  }, [supabaseCredential]);

  const onToggleCategory = (id: string) => {
    setCategoryData(toggleCategory(id, categoryData));
  };

  return (
    <Page
      navbar={
        <NavBar
          data={categoryData}
          onToggleCategory={onToggleCategory}
          supabaseCredential={supabaseCredential}
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
