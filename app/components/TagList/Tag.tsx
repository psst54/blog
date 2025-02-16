import type { MouseEvent } from "react";

import type { Tag } from "~/types/post";
import { tagContainer, tagText, spoiler } from "./styles";

export default function TagItem({ item }: { item: Tag }) {
  function goToTagPage(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    window.location.href = `/tags/${item.id}`;
  }

  return (
    <button onClick={goToTagPage} css={tagContainer}>
      <p css={[tagText, item.isSpoiler && spoiler]}>{item.title}</p>
    </button>
  );
}
