import { Link } from "@remix-run/react";
import PostCard from "./PostCard";
import { container, linkStyle } from "./styles";

import { Post } from "~/types";

export default function PostGrid({ posts }: { posts: any }) {
  return (
    <div css={container}>
      {posts?.map((post: Post, postIdx: number) => (
        <Link
          key={postIdx}
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
