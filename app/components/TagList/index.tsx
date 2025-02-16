import type { Tag } from "~/types/post";

import TagItem from "./Tag";
import { tagListContainer } from "./styles";

export default function TagList({ data }: { data: Tag[] | null | undefined }) {
  if (isEmpty({ data })) {
    return <></>;
  }

  return (
    <div css={tagListContainer}>
      {(data as Tag[]).map((tag) => (
        <TagItem key={tag.title} item={tag} />
      ))}
    </div>
  );
}

// [todo] fix this
export function isEmpty({ data }: { data: Tag[] | null | undefined }) {
  if (!data || data.length === 0) {
    return true;
  }

  return false;
}
