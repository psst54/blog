import { Outlet } from "@remix-run/react";
import Page from "@components/Page";
import NavBar from "@components/NavBar";

export default function TagsPage() {
  return <Page navbar={<NavBar />} body={<Outlet />} />;
}
