import { Link } from "@remix-run/react";

import type { Document } from "~/types/post";

import PostCard from "./PostCard";
import Skeleton from "./Skeleton";
import { container, linkStyle } from "./styles";

export default function PostListView({ postList }: { postList: Document[] }) {
  if (postList.length === 0) {
    return (
      <div css={container}>
        {new Array(3).fill(0).map((_, index) => (
          <Skeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div css={container}>
      {postList.map((post) => (
        <Link
          key={post.id}
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
