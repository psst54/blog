import { useState } from "react";
import { useLoaderData, Form } from "@remix-run/react";

import NavBar from "@components/NavBar";
import { background, contentContainer } from "~/styles/main";
import DatabasePost from "../$subBlogId.$postId/components/PostDatabase";

export { loader } from "./utils/loader";

export default function SearchPage() {
  const { searchResult } = useLoaderData();

  const [searchString, setSearchString] = useState("");

  return (
    <main css={background}>
      <NavBar />
      <div css={contentContainer}>
        <Form>
          <input
            type="text"
            value={searchString}
            onChange={(event) => {
              setSearchString(event.target.value);
            }}
            id="search-string"
            name="string"
          />
          <button type="submit">검색</button>
        </Form>

        <DatabasePost posts={searchResult} />
      </div>
    </main>
  );
}
