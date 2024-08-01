import { useState } from "react";
import { useLoaderData, Form } from "@remix-run/react";

import NavBar from "@components/NavBar";
import DatabasePost from "../$subBlogId.$postId/components/PostDatabase";
import { button, input, searchArea } from "./styles";
import Page from "~/components/Page";

export { loader } from "./utils/loader";

export default function SearchPage() {
  const { searchResult } = useLoaderData();

  const [searchString, setSearchString] = useState("");

  return (
    <Page
      navbar={<NavBar />}
      body={
        <>
          <Form css={searchArea}>
            <input
              css={input}
              type="text"
              value={searchString}
              onChange={(event) => {
                setSearchString(event.target.value);
              }}
              id="search-string"
              name="string"
            />
            <button type="submit" css={button}>
              검색
            </button>
          </Form>
          <DatabasePost posts={searchResult} />
        </>
      }
    />
  );
}
