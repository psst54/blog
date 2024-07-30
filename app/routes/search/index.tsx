import { useLoaderData } from "@remix-run/react";

import NavBar from "@components/NavBar";
import { background, contentContainer } from "~/styles/main";
import Database from "../$subBlogId.$postId/components/PostDatabase";

export { loader } from "./utils/loader";

export default function SearchPage() {
  const { searchResult } = useLoaderData();

  console.log(searchResult);

  return (
    <main css={background}>
      <NavBar />
      <div css={contentContainer}>
        <Database posts={searchResult} />
      </div>
    </main>
  );
}
