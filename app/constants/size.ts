export const SIZE = {
  TOP_NAV_HEIGHT: "4rem",
  CATEGORY_WIDTH: "18rem",
  CONTENT_MAX_WIDTH: "60rem",

  BORDER: {
    POST_CARD: "2px",
  },

  BORDER_RADIUS: {
    POST_CARD: "1.5rem",
  },
};

const BREAK_POINTS = [1200, 576];
export const mq = BREAK_POINTS.map((bp) => `@media (max-width: ${bp}px)`);
