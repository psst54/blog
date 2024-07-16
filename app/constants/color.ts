const PALETTE = {
  PURPLE: {
    ULTRA_LIGHT: "#e5e1fc",
    VERY_LIGHT: "#c1b4fc",
    LIGHT: "#ab94fe",
    STANDARD: "#927bff",
    DARK: "#6d52eb",
  },
};

export const COLOR = {
  BACKGROUND: {
    STANDARD: "#fcfcfd",
    TO_SECONDARY: "#e1e7f0",
  },
  BORDER: {
    STANDARD: "#484561",
    LIGHT: "#C1BACC",
    DARK: "#000",
  },
  TEXT: {
    STANDARD: "#000",
    SECONDARY: "#484561",
    REVERSE: "#f8f7f9",
    LINK: PALETTE.PURPLE.STANDARD,
    TAG: PALETTE.PURPLE.STANDARD,
  },

  PRIMARY: { ...PALETTE.PURPLE },
  SECONDARY: {
    STANDARD: "#69aefb",
    LIGHT: "#99c6ff",
    VERY_LIGHT: "#bddeff",
  },
};
