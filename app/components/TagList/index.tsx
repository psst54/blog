import TagItem from "@components/Tag";
import type { Tag } from "~/types";

export default function TagList({ data }: { data: Tag[] | null | undefined }) {
  if (!doesTagExist({ data })) return <></>;

  return (
    <div css={TagListContainer}>
      {(data as Tag[]).map(
        (tag: { text: string; isSpoiler: boolean }, tagIndex: number) => (
          <TagItem key={tagIndex} item={tag} />
        )
      )}
    </div>
  );
}

export function doesTagExist({ data }: { data: Tag[] | null | undefined }) {
  if (!data) return false;
  if (data.length === 0) return false;
  return true;
}

export const TagListContainer = {
  display: "flex",
  flexWrap: "wrap" as const,
  gap: "0.25rem",
  marginTop: "0.5rem",
};
