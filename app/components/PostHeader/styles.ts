import { color } from "@styles/color";

export const Title = {
  fontSize: "2.4rem",
  fontWeight: 600,
  wordBreak: "keep-all" as "keep-all",
};

export const SubTitle = {
  marginTop: "0.5rem",
  color: color.text.secondary,
  fontSize: "1.2rem",
  fontWeight: 500,
  wordBreak: "keep-all" as "keep-all",
};

export const TagListContainer = {
  display: "flex",
  flexWrap: "wrap" as "wrap",
  gap: "0.25rem",
  marginTop: "0.5rem",
};

export const DateText = { marginTop: "0.5rem", textAlign: "right" as "right" };

export const DivideLine = {
  width: "100%",
  border: `1px solid ${color.border.standard}`,
  margin: "1rem 0",
};
