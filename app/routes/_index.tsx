import type { V2_MetaFunction } from "@remix-run/cloudflare";
export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main>
      <div>
        <h1 css={{ fontWeight: 100 }}>Blog</h1>
        <h1 css={{ fontWeight: 200 }}>Blog</h1>
        <h1 css={{ fontWeight: 300 }}>Blog</h1>
        <h1 css={{ fontWeight: 400 }}>Blog</h1>
        <h1 css={{ fontWeight: 500 }}>Blog</h1>
        <h1 css={{ fontWeight: 800 }}>Blog</h1>
        <h1 css={{ fontWeight: 900 }}>Blog</h1>
      </div>
    </main>
  );
}
