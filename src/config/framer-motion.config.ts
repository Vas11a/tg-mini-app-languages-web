export const pagesAnimation = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -10,
  },
};

export const pagesTransition = {
  duration: 0.25,
  ease: "easeInOut" as const,
};
