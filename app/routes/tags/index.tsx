import { Outlet } from "@remix-run/react";

import Page from "~/components/Page";

export default function TagsPage() {
  return (
    <Page>
      <Outlet />
    </Page>
  );
}
