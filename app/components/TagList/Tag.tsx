import { tagContainer, tagText, spoiler } from "./styles";
import type { Tag } from "~/types";

export default function TagItem({ item }: { item: Tag }) {
  return (
    <button
      onClick={(event) => {
        event.preventDefault();
        window.location.href = `/tags/${item.id}`;
      }}
      css={tagContainer}
    >
      <p css={[tagText, item.isSpoiler && spoiler]}>{item.title}</p>
    </button>
  );
}
