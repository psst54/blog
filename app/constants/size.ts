export const SIZE = {
  TOP_NAV_HEIGHT: "4rem",
  CATEGORY_WIDTH: "18rem",

  BORDER: {
    POST_CARD: "2px",
  },

  BORDER_RADIUS: {
    POST_CARD: "1rem",
  },
};

const BREAK_POINTS = [1280, 1024, 768, 640];
export const mq = BREAK_POINTS.map((bp) => `@media (max-width: ${bp}px)`);
