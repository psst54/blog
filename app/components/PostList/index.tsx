import { Link } from "@remix-run/react";

import PostCard from "./PostCard";
import { Container, CardWrapper } from "./styles";

import type { Post } from "~/types";

export default function PostList({ content }: { content: any }) {
  return (
    <div css={Container}>
      {content?.map((post: Post, postIdx: number) => (
        <Link
          key={postIdx}
          to={`/${post.sub_blog}/${post.id}`}
          css={CardWrapper}
        >
          <PostCard postData={post} />
        </Link>
      ))}
    </div>
  );
}
