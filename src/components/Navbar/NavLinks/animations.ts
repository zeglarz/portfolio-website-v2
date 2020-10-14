export const container = (showIntro) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: showIntro ? 2.6 : 0,
      staggerChildren: 0.3,
    },
  },
});

export const item = {
  hidden: { opacity: 0, y: -100 },
  show: { opacity: 1, y: 0 },
};
