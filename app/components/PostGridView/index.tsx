import { Link } from "@remix-run/react";

import type { Document } from "~/types/post";

import PostCard from "./PostCard";
import Skeleton from "./Skeleton";

const container = `
  flex gap-2
  w-full mt-4 px-2 sm:px-4
  overflow-x-auto overflow-y-hidden
  `;

export default function PostListView({ postList }: { postList: Document[] }) {
  if (postList.length === 0) {
    return (
      <div className={container}>
        {new Array(3).fill(0).map((_, index) => (
          <Skeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className={container}>
      {postList.map((post) => (
        <Link
          key={post.id}
          aria-label={post.title}
          to={`/${post.sub_blog}/${post.id}`}
        >
          <PostCard post={post} />
        </Link>
      ))}
    </div>
  );
}
