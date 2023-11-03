import { lazy, Suspense } from "react";
import Tag from "@components/Tag";
import { color } from "@styles/color";

const Thumbnail = lazy(() => import("./Thumbnail"));

export default function PostCard({ postData }: { postData: any }) {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "space-between",

        width: "100vw",
        maxWidth: "46rem",
        border: `2px solid ${color.border.standard}`,
        borderRadius: "1rem",
        boxShadow: `6px 6px 0px 0px ${color.border.standard}`,

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
      <div css={{ padding: "1rem" }}>
        <h2
          css={{
            fontSize: "1.2rem",
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
            gap: "0.25rem",
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

      <div
        css={{
          width: "15rem",
          borderRadius: "0 1rem 1rem 0",
        }}
      >
        {postData.thumbnail && (
          <Suspense fallback={<></>}>
            <Thumbnail thumbnail={postData.thumbnail} />
          </Suspense>
        )}
      </div>
    </div>
  );
}
