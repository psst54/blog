import { color } from "@styles/color";
import { SIZE, mq } from "@styles/size";

export const Container = {
  display: "flex",
  flexDirection: "column" as const,

  aspectRatio: "1/1.125",

  background: `${color.background.standard}`,
  border: `2px solid ${color.border.standard}`,
  borderRadius: SIZE.BORDER_RADIUS.POST_CARD,
  boxShadow: `8px 8px 0px 0px ${color.secondary.standard}`,

  [mq[0]]: {
    aspectRatio: "1/1.125",
  },
  [mq[1]]: {
    aspectRatio: "1/1.125",
  },

  "&:hover": {
    transform: "translateY(-0.25rem)",
    transition: "transform 0.1s ease-in-out",
    zIndex: 2,
  },

  ":not(:hover)": {
    transform: "translateY(0)",
    transition: "transform 0.1s ease-in-out",
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
      backgroundColor: color.border.light,
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
  color: color.text.secondary,
  fontSize: "1rem",
  fontWeight: 300,
  wordBreak: "keep-all" as const,
};
