export const size = {
  TOPBAR_HEIGHT: "3rem",
  CATEGORY_WIDTH: "18rem",
};

const BREAK_POINTS = [1200, 576];
export const mq = BREAK_POINTS.map((bp) => `@media (max-width: ${bp}px)`);
