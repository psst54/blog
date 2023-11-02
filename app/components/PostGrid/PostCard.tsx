import { lazy, Suspense } from "react";
import { color } from "@styles/color";
import Tag from "@components/Tag";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const Thumbnail = lazy(() => import("./Thumbnail"));

export default function PostCard({ postData }: { postData: any }) {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column" as "column",

        aspectRatio: "1/1.125",

        border: `2px solid ${color.secondary.standard}`,
        borderRadius: "1rem",
        boxShadow: `6px 6px 0px 0px ${color.secondary.standard}`,

        [mq[0]]: {
          aspectRatio: "1/1.125",
        },
        [mq[1]]: {
          aspectRatio: "1/1.125",
        },

        "&:hover": {
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
      {postData.thumbnail && (
        <div
          css={{
            width: "100%",
            height: "50%",
          }}
        >
          <Suspense fallback={<></>}>
            <Thumbnail thumbnail={postData.thumbnail} />
          </Suspense>
        </div>
      )}

      <div
        css={{
          width: "100%",
          height: postData.thumbnail ? "50%" : "100%",

          padding: "1rem",

          overflow: "auto",
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "transparent",
          },

          "&:hover": {
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: color.border.light,
            },
          },
        }}
      >
        <h2
          css={{
            fontSize: "1.4rem",
            fontWeight: 800,
            wordBreak: "keep-all",
          }}
        >
          {postData.title}
        </h2>
        <h3
          css={{
            marginTop: "0.5rem",
            color: color.text.secondary,
            fontSize: "1rem",
            fontWeight: 300,
            wordBreak: "keep-all",
          }}
        >
          {postData.sub_title}
        </h3>

        <div
          css={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginTop: "1rem",
          }}
        >
          {postData?.tags &&
            postData.tags.map(
              (tag: { text: string; isSpoiler: boolean }, tagIndex: number) => (
                <Tag key={tagIndex} item={tag} />
              )
            )}
        </div>
      </div>
    </div>
  );
}
