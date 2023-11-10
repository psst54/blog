import { Container, Text, SpoilerText } from "./styles";
import { Tag } from "~/types";

export default function TagItem({ item }: { item: Tag }) {
  return (
    <div css={Container}>
      <p css={[Text, item.isSpoiler && SpoilerText]}>{item.text}</p>
    </div>
  );
}
