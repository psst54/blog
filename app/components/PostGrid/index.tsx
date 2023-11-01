import { Link } from "@remix-run/react";
import PostCard from "@components/PostCard";

export default function PostGrid({ content }: { content: any }) {
  return (
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: "1.5rem",
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
