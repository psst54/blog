import type { LoaderArgs } from "@remix-run/cloudflare";
import { useLoaderData, useOutletContext } from "@remix-run/react";

import { unified } from "unified";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkToc from "remark-toc";
import { VFile } from "vfile";

import { createClient } from "@supabase/supabase-js";
import { Database } from "@supabase/types";
import { getSubBlogId } from "@functions/category";
import { getPostById, getPostsById } from "@functions/supabase";

import PostDetailPageScreen from "@screens/$subBlogId.$postId.screen";
import { Env, PlainCategory } from "~/types";

async function parse(content: string) {
  const processor = await unified()
    .use(remarkParse)
    .use([remarkMath, remarkGfm, remarkToc])
    .use(remarkRehype, {
      allowDangerousHtml: true,
    })
    .use([rehypeKatex]);

  const file = new VFile();
  file.value = content;

  return await processor.runSync(processor.parse(file), file);
}

export const loader = async ({ context, params }: LoaderArgs) => {
  const supabase = createClient<Database>(
    (context.env as Env).SUPABASE_URL,
    (context.env as Env).SUPABASE_KEY
  );

  const loadData = async ({
    subBlogId,
    postId,
  }: {
    subBlogId: string;
    postId: string;
  }) => {
    try {
      const postData = await getPostById({ supabase, postId });

      if (postData.type === "post") {
        const content = await parse("# Table Of Contents\n" + postData.content);

        return {
          ...postData,
          test: postData.content,
          content: content,
        };
      }

      const databaseData = await getPostsById({
        supabase,
        subBlogId,
        postId,
      });

      return { ...postData, posts: databaseData };
    } catch (err) {
      return null;
    }
  };

  const subBlogId = getSubBlogId({ params });

  const data = await loadData({
    subBlogId,
    postId: params.postId || "",
  });

  return { content: data };
};

export default function PostPage() {
  const { content } = useLoaderData<typeof loader>();

  const plainCategoryData: PlainCategory[] = useOutletContext();

  return (
    <PostDetailPageScreen
      content={content}
      plainCategoryData={plainCategoryData}
    />
  );
}
