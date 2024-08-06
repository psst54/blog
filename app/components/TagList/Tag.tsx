import { tagContainer, tagText, spoiler } from "./styles";
import type { Tag } from "~/types";

export default function TagItem({ item }: { item: Tag }) {
  return (
    <div css={tagContainer}>
      <p css={[tagText, item.isSpoiler && spoiler]}>{item.title}</p>
    </div>
  );
}
