import { COLOR } from "~/constants/color";
import { SIZE, mq } from "~/constants/size";

export const Container = {
  display: "flex",
  flexDirection: "column" as const,

  aspectRatio: "1/1.125",

  background: `${COLOR.BACKGROUND.STANDARD}`,
  border: `2px solid ${COLOR.BORDER.STANDARD}`,
  borderRadius: SIZE.BORDER_RADIUS.POST_CARD,
  boxShadow: `8px 8px 0px 0px ${COLOR.SECONDARY.STANDARD}`,

  [mq[0]]: {
    aspectRatio: "1/1.125",
  },
  [mq[1]]: {
    aspectRatio: "1/1.125",
  },
};

export const ThumbNailArea = {
  width: "100%",
  height: "50%",
};

export const TextArea = {
  width: "100%",
  padding: "1rem",

  overflow: "auto",
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "transparent",
  },

  "&:hover": {
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: COLOR.BORDER.LIGHT,
    },
  },
};

export const Title = {
  fontSize: "1.4rem",
  fontWeight: 800,
  wordBreak: "keep-all" as const,
};

export const SubTitle = {
  marginTop: "0.5rem",
  color: COLOR.TEXT.SECONDARY,
  fontSize: "1rem",
  fontWeight: 300,
  wordBreak: "keep-all" as const,
};
