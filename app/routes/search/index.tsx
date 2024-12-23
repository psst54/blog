import { useState } from "react";
import { useLoaderData, Form } from "@remix-run/react";

import NavBar from "@components/NavBar";
import DatabasePost from "../$subBlogId.$postId/components/PostDatabase";
import { button, input, searchArea } from "./styles";
import Page from "~/components/Page";
import { mq } from "~/constants/size";

export { loader } from "./utils/loader";

export default function SearchPage() {
  const { searchResult } = useLoaderData();

  const [searchString, setSearchString] = useState("");

  return (
    <Page
      navbar={<NavBar />}
      body={
        <div css={{ padding: "0 1rem", [mq[1]]: { padding: "0 0.5rem" } }}>
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
        </div>
      }
    />
  );
}
