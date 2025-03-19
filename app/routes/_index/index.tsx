import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Page from "~/components/Page";

import { PinnedSection, RecentSection } from "./_components";

export { meta } from "./_utils/meta";

const queryClient = new QueryClient();

export default function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <Page>
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <PinnedSection />
          <RecentSection />
        </div>
      </Page>
    </QueryClientProvider>
  );
}
