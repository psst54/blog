import type { Tag } from "~/types";

import TagItem from "./Tag";
import { tagListContainer } from "./styles";

export default function TagList({ data }: { data: Tag[] | null | undefined }) {
  if (isEmpty({ data })) return <></>;

  return (
    <div css={tagListContainer}>
      {(data as Tag[]).map((tag: Tag) => (
        <TagItem key={tag.text} item={tag} />
      ))}
    </div>
  );
}

export function isEmpty({ data }: { data: Tag[] | null | undefined }) {
  if (!data) return true;
  if (data.length === 0) return true;
  return false;
}
