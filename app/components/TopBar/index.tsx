import { useState, useEffect } from "react";
import { Link, useParams } from "@remix-run/react";

import { createClient } from "@supabase/supabase-js";
import { Database } from "@supabase/types";

import CategoroyPopUp from "@components/CategoryPopUp";
import HomeIcon from "@assets/HomeIcon";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

function buildTree(items: any) {
  const itemMap = {};

  for (const item of items) {
    itemMap[item.id] = { ...item, children: [] };
  }

  const rootNodes = [];

  for (const item of items) {
    const parentID = item.parent_id;

    if (parentID === null || !itemMap[parentID]) {
      rootNodes.push(itemMap[item.id]);
    } else {
      itemMap[parentID].children.push(itemMap[item.id]);
    }
  }

  return rootNodes;
}

export default function TopBar({
  supabaseUrl,
  supabaseKey,
}: {
  supabaseUrl: string;
  supabaseKey: string;
}) {
  const supabase = createClient<Database>(supabaseUrl, supabaseKey);
  const params = useParams();

  const [categoryData, setCategoryData] = useState([]);
  const [isPostOpen, setIsPostOpen] = useState({});

  const getData = async ({ subBlogId }: { subBlogId: string }) => {
    try {
      const { data, error } = await supabase
        .from(subBlogId)
        .select("id, title, parent_id, type")
        .order("created_at");

      if (error) throw new Error();

      return data;
    } catch (err) {
      return;
    }
  };

  useEffect(() => {
    getData({ subBlogId: params.subBlogId || "" }).then((res) => {
      setCategoryData(buildTree(res));
    });
  }, [params]);

  useEffect(() => {
    if (categoryData.length === 0) return;

    const newObj = {};
    categoryData.forEach((datum) => (newObj[datum] = false));
    setIsPostOpen(newObj);
  }, [categoryData]);

  const toggleCategory = (id: number) => {
    const newData = { ...isPostOpen };
    newData[id] = !newData[id];
    setIsPostOpen({ ...newData });
  };

  return (
    <div
      css={{
        display: "none",

        [mq[0]]: {
          position: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          width: "100%",
          height: "3rem",
          padding: "0 1rem",
          background: "#A8DC90",

          zIndex: 1,
        },
      }}
    >
      <Link to={`/`}>
        <HomeIcon size="1.5rem" color="#000" />
      </Link>

      <CategoroyPopUp
        categoryData={categoryData}
        isPostOpen={isPostOpen}
        toggleCategory={toggleCategory}
      />
    </div>
  );
}
