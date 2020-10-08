const divVariants = {
  init: {
    width: '100%',
  },
  end: {
    width: '0%',
    transition: {
      ease: 'easeInOut',
      duration: 0.9,
      delay: 0.25,
    },
  },
};
const divVariants2 = {
  init: {
    width: '100%',
  },
  end: {
    width: '0%',
    transition: {
      ease: 'easeInOut',
      duration: 1.1,
    },
  },
};
const variants = {
  init: {},
  end: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const imgVariants = {
  init: { scale: 1.6 },
  end: {
    scale: 0.9,
    transition: {
      filter: {
        duration: 3,
        yoyo: Infinity,
      },
      duration: 0.8,
    },
  },
};

export { imgVariants, variants, divVariants2, divVariants };
