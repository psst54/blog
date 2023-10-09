const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const background = {
  display: "flex",
  width: "100%",
  height: "100%",
};
export const gradient = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100dvh",
  background:
    "linear-gradient(174deg, #A8DC90 0%, #8BE2B3 33.33%, #70E3E3 66.67%, #53A8E2 100%)",

  zIndex: -1,
};
export const categoryContainer = {
  display: "flex",
  width: "100%",
  background: "#FFFFFFD8",
  borderRadius: "2rem 0 0 0",

  marginTop: "1rem",

  [mq[0]]: {
    marginTop: "3rem",
  },

  [mq[1]]: {
    borderRadius: "1rem 0 0 0",
  },
};
export const contentContainer = {
  flexGrow: 1,
  width: "0px",
  display: "flex",
  flexDirection: "column" as "column",

  background: "#FFFFFF",

  [mq[0]]: {
    borderRadius: "2rem 0 0 0",
  },
  [mq[1]]: {
    borderRadius: "1rem 0 0 0",
  },
};

export const recentPostsConatiner = {
  padding: "2rem",
};
