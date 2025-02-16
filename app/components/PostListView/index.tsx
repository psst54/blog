import { Link } from "@remix-run/react";

import type { Document } from "~/types/post";

import PostCard from "./PostCard";
import { container, linkStyle } from "./styles";

export default function PostListView({ postList }: { postList: Document[] }) {
  return (
    <div css={container}>
      {postList.map((post: Document, postIndex: number) => (
        <Link
          key={postIndex}
          aria-label={post.title}
          to={`/${post.sub_blog}/${post.id}`}
          css={linkStyle}
        >
          <PostCard post={post} />
        </Link>
      ))}
    </div>
  );
}
