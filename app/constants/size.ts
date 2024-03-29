export const SIZE = {
  TOPBAR_HEIGHT: "3rem",
  CATEGORY_WIDTH: "18rem",

  BORDER: {
    POST_CARD: "2px",
  },

  BORDER_RADIUS: {
    POST_CARD: "1rem",
  },
};

const BREAK_POINTS = [1200, 576];
export const mq = BREAK_POINTS.map((bp) => `@media (max-width: ${bp}px)`);
