const PALETTE = {
  PURPLE: {
    ULTRA_LIGHT: "#efebff",
    VERY_LIGHT: "#c1b4fc",
    LIGHT: "#ab94fe",
    STANDARD: "#7a5eff",
    DARK: "#5e42e3",
  },
};

export const COLOR = {
  BACKGROUND: {
    STANDARD: "#ffffff",
    HIGHLIGHT: PALETTE.PURPLE.STANDARD,
    CODE: PALETTE.PURPLE.ULTRA_LIGHT,
  },
  BORDER: {
    STANDARD: "#484561",
    LIGHT: "#C1BACC",
    DARK: "#000",
    HIGHLIGHT: PALETTE.PURPLE.STANDARD,
    CODE: PALETTE.PURPLE.VERY_LIGHT + "55",
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
