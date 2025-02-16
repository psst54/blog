import { Outlet } from "@remix-run/react";

import { mq } from "~/constants/size";
import Page from "~/components/Page";

export { loader } from "./utils/loader";

export default function SubBlog() {
  return (
    <Page>
      <div css={{ padding: "0 1rem", [mq[1]]: { padding: "0 0.5rem" } }}>
        <Outlet />
      </div>
    </Page>
  );
}
