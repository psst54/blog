import { Link } from "@remix-run/react";
import PostCard from "./PostCard";
import { Post } from "~/types";

export default function PostList({ content }: { content: any }) {
  return (
    <div
      css={{
        display: "grid",
        gap: "1.5rem",
      }}
    >
      {content?.map((post: Post, postIdx: number) => (
        <Link
          key={postIdx}
          to={`/${post.sub_blog}/${post.id}`}
          css={{
            textDecoration: "none",
            color: "initial",
            width: "fit-content",
          }}
        >
          <PostCard postData={post} />
        </Link>
      ))}
    </div>
  );
}
