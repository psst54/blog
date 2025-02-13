import NavBar from "@components/NavBar";
import Page from "@components/Page";
import Content from "./_components/Content";

export { meta } from "./_utils/meta";

export default function Index() {
  return <Page navbar={<NavBar />} body={<Content />} />;
}
