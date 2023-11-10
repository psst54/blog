import { color } from "@styles/color";

export const Container = {
  padding: "0.1rem 0.75rem",
  background: color.border.dark,

  border: `2px solid ${color.border.dark}`,
  borderRadius: "2rem",

  color: color.text.reverse,
  fontWeight: 500,
};

export const Text = { color: color.text.reverse };

export const SpoilerText = {
  filter: "blur(0.25rem)",
  "&:hover": {
    color: color.text.reverse,
    filter: "none",
  },
};
