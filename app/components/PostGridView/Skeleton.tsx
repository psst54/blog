import { SIZE } from "~/constants/size";
import { backgroundPulse, borderPulse } from "~/styles/pulse";
import { CARD_SIZE } from "./styles";

const container = {
  display: "flex",
  flexDirection: "column" as const,
  flexShrink: 0,

  width: CARD_SIZE,
  height: CARD_SIZE,
  padding: "0.6rem 0.75rem",

  border: "2px solid",
  borderRadius: SIZE.BORDER_RADIUS.POST_CARD,
  ...borderPulse,
};

const titleArea = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "0.5rem",
};

const title = {
  width: "80%",
  height: "1.5rem",

  borderRadius: "1.5rem",
  ...backgroundPulse,
};

export default function Skeleton() {
  return (
    <div css={container}>
      <div css={titleArea}>
        <div css={[title, { width: "100%" }]} />
        <div css={title} />
      </div>
    </div>
  );
}
