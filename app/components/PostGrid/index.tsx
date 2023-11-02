import { Link } from "@remix-run/react";
import PostCard from "./PostCard";
import { POST_WIDTH } from "./styles";

export default function PostGrid({ posts }: { posts: any }) {
  return (
    <div
      css={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, minmax(${POST_WIDTH}, 1fr))`,
        gap: "1.5rem",
      }}
    >
      {posts?.map((post, postIdx: number) => {
        return (
          <Link
            key={postIdx}
            aria-label={post.title}
            to={`/${post.sub_blog}/${post.id}`}
            css={{ textDecoration: "none", color: "initial" }}
          >
            <PostCard postData={post} />
          </Link>
        );
      })}
    </div>
  );
}
