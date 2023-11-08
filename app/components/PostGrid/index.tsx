import { Link } from "@remix-run/react";
import PostCard from "./PostCard";
import { POST_WIDTH } from "./styles";

import { mq } from "@styles/size";
import { Post } from "~/types";

export default function PostGrid({ posts }: { posts: any }) {
  return (
    <div
      css={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, ${POST_WIDTH})`,
        gap: "1.5rem",

        [mq[0]]: {
          gridTemplateColumns: `repeat(auto-fill, minmax(${POST_WIDTH}, 1fr))`,
        },
        [mq[1]]: {},
      }}
    >
      {posts?.map((post: Post, postIdx: number) => {
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
