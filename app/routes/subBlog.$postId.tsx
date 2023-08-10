import type { LoaderArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { createClient } from "@supabase/supabase-js";
import { Database } from "@supabase/types";

import {
  styledH1,
  styledH2,
  styledH3,
  styledP,
  styledA,
  styledCode,
  styledLi,
  styledOl,
  styledUl,
  styledBlockquote,
} from "@styles/markdown";

export const loader = async ({ context, params }: LoaderArgs) => {
  const supabase = createClient<Database>(
    context.env.SUPABASE_URL,
    context.env.SUPABASE_KEY
  );

  const loadData = async (id: string) => {
    try {
      const { data: postData, error: postError } = await supabase
        .from("posts")
        .select("content")
        .eq("id", id)
        .single();

      if (postError) throw new Error();

      return postData?.content;
    } catch (err) {
      return null;
    }
  };

  const postId = params.postId;
  if (!postId) {
    return null;
  }

  const data = await loadData(postId);

  return data;
};

export default function PostPage() {
  const content = useLoaderData<typeof loader>();

  return (
    <div css={{ height: "calc(100% - 4rem)" }}>
      <div
        css={{
          height: "100%",
          padding: "1rem 1.5rem",

          overflowY: "auto",
          "::-webkit-scrollbar": {
            width: "8px",
          },
          "::-webkit-scrollbar-thumb": {
            borderRadius: "4px",
            background: "#53A8E2",
          },
        }}
      >
        <ReactMarkdown
          components={{
            h1: (props: any) => <h1 css={styledH1} {...props} />,
            h2: (props: any) => <h2 css={styledH2} {...props} />,
            h3: (props: any) => <h3 css={styledH3} {...props} />,
            h4: (props: any) => <h4 css={styledH3} {...props} />,
            h5: (props: any) => <h5 css={styledH3} {...props} />,
            h6: (props: any) => <h6 css={styledH3} {...props} />,
            p: (props: any) => <p css={styledP} {...props} />,
            a: (props: any) => <a target="_blank" css={styledA} {...props} />,
            li: (props: any) => <li css={styledLi} {...props} />,
            ol: (props: any) => <ol css={styledOl} {...props} />,
            ul: (props: any) => <ul css={styledUl} {...props} />,
            blockquote: (props: any) => (
              <blockquote css={styledBlockquote} {...props} />
            ),
            pre: (props: any) => <pre css={{ overflow: "auto" }} {...props} />,
            code: (props: any) => {
              const match = /language-(\w+)/.exec(props.className || "");
              return !props.inline && match ? (
                <SyntaxHighlighter
                  children={String(props.children).replace(/\n$/, "")}
                  style={nord}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code css={styledCode} {...props}>
                  {props.children}
                </code>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
