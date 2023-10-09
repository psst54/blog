import { Link } from "@remix-run/react";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export default function PostList({ content }: { content: any }) {
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
          <div
            css={{
              display: "flex",
              flexDirection: "column" as "column",
              height: "350px",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              borderRadius: "1rem",
              boxShadow: "4px 4px 15px 3px rgba(78, 120, 97, 0.25)",

              [mq[0]]: {
                minHeight: "400px",
                height: "40vw",
                maxHeight: "600px",
              },
              [mq[1]]: {
                minHeight: "350px",
                height: "80vw",
                maxHeight: "400px",
              },

              "&:hover": {
                boxShadow: "4px 4px 15px 5px rgba(78, 120, 97, 0.3)",
                transform: "translateY(-0.25rem)",
                transition: "transform 0.1s ease-in-out",
                zIndex: 2,
              },

              ":not(:hover)": {
                transform: "translateY(0)",
                transition: "transform 0.1s ease-in-out",
              },
            }}
          >
            <div
              css={{
                width: "100%",
                height: "50%",
                background: "#70E3E3B2",
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
                  fontSize: "1.2rem",
                  fontWeight: 500,
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
                  fontWeight: 300,
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
                  marginTop: "0.5rem",
                }}
              >
                {post?.tags &&
                  post.tags.map(
                    (
                      tag: { text: string; isSpoiler: boolean },
                      tagIdx: number
                    ) => (
                      <div
                        key={tagIdx}
                        css={{
                          padding: "0.1rem 0.5rem",
                          background: "transparent",
                          border: "1px solid #4D4D4D",
                          borderRadius: "0.5rem",
                        }}
                      >
                        <p
                          css={[
                            { color: "#4D4D4D" },
                            tag.isSpoiler && {
                              filter: "blur(0.3rem)",
                              "&:hover": {
                                filter: "none",
                              },
                            },
                          ]}
                        >
                          {tag.text}
                        </p>
                      </div>
                    )
                  )}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
