import { Outlet } from "@remix-run/react";

import NavBar from "@components/NavBar";
import Page from "@components/Page";
import { mq } from "~/constants/size";

export { loader } from "./utils/loader";

export default function SubBlog() {
  return (
    <Page
      navbar={<NavBar />}
      body={
        <div css={{ padding: "0 1rem", [mq[1]]: { padding: "0 0.5rem" } }}>
          <Outlet />
        </div>
      }
    />
  );
}
