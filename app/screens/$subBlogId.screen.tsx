import { useState, useEffect } from "react";
import { useLoaderData, useParams } from "@remix-run/react";
import { Outlet } from "@remix-run/react";

import MenuBar from "@components/MenuBar";
import TopBar from "@components/TopBar";
import CategoryList from "@components/CategoryList";
import {
  background,
  gradient,
  categoryContainer,
  contentContainer,
} from "@styles/main";

export default function SubBlogScreen({
  data,
  isPostOpen,
  setDataOpen,
  subBlogId,
  postId,
}) {
  return (
    <main css={background}>
      <div css={gradient}></div>

      <MenuBar />
      <TopBar />

      <div css={categoryContainer}>
        <CategoryList
          data={data}
          isPostOpen={isPostOpen}
          setIsPostOpen={setDataOpen}
          subBlogId={subBlogId}
          postId={postId}
        />

        <div css={contentContainer}>
          <Outlet />
        </div>
      </div>
    </main>
  );
}
