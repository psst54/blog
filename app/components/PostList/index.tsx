import { Link } from "@remix-run/react";

export default function PostList({ content }: { content: any }) {
  return (
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, auto))",
        gap: "2rem",
      }}
    >
      {content.map((post) => (
        <Link
          aria-label={post.title}
          to={`/subBlog/${post.id}`}
          css={{ textDecoration: "none", color: "initial" }}
        >
          <div
            css={{
              display: "flex",
              flexDirection: "column" as "column",
              height: 420,
              border: "1px solid rgba(255, 255, 255, 0.25)",
              borderRadius: "1rem",
              boxShadow: "4px 4px 15px 3px rgba(78, 120, 97, 0.25)",
            }}
          >
            <div
              css={{
                width: "100%",
                height: "50%",
                background: "#8BE2B3B2",
                borderRadius: "1rem 1rem 0 0",
              }}
            >
              {post.thumbnail && (
                <img
                  src={post.thumbnail}
                  css={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "1rem 1rem 0 0",
                  }}
                />
              )}
            </div>
            <div css={{ width: "100%", height: "50%", padding: "1rem" }}>
              <h2
                css={{
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  wordBreak: "keep-all",
                }}
              >
                {post.title}
              </h2>
              <h3
                css={{
                  marginTop: "0.5rem",
                  color: "#777777",
                  fontSize: "1rem",
                  fontWeight: 400,
                  wordBreak: "keep-all",
                }}
              >
                {post.sub_title}
              </h3>

              <div
                css={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.25rem",
                  marginTop: "1rem",
                }}
              >
                {post.tags.map((tag) => (
                  <div
                    css={{
                      padding: "0.25rem 0.75rem",
                      background: "#4D4D4D",
                      borderRadius: "0.5rem",
                      color: "#FFFFFF",
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
