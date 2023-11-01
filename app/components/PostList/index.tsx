import { Link } from "@remix-run/react";
import PostCard from "./PostCard";

export default function PostList({ content }: { content: any }) {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {content?.map((post, postIdx: number) => (
        <Link
          key={postIdx}
          aria-label={post.title}
          to={`/${post.sub_blog}/${post.id}`}
          css={{ textDecoration: "none", color: "initial" }}
        >
          <PostCard postData={post} />
        </Link>
      ))}
    </div>
  );
}
