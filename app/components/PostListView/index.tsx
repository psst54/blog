import { Link } from "@remix-run/react";
import PostCard from "./PostCard";
import { container, linkStyle, divideLine } from "./styles";

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
          {postIndex !== 0 && <hr css={divideLine} />}
          <PostCard postData={post} />
        </Link>
      ))}
    </div>
  );
}
