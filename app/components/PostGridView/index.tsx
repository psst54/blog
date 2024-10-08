import { Link } from "@remix-run/react";
import PostCard from "./PostCard";
import { container, linkStyle } from "./styles";

import type { Post } from "~/types";

export default function PostListView({ posts }: { posts: Post[] }) {
  return (
    <div css={container}>
      {posts.map((post: Post, postIndex: number) => (
        <Link
          key={postIndex}
          aria-label={post.title}
          to={`/${post.sub_blog}/${post.id}`}
          css={linkStyle}
        >
          <PostCard postData={post} />
        </Link>
      ))}
    </div>
  );
}
