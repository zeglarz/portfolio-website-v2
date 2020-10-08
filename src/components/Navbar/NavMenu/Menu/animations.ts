const menuVariants = {
  hidden: (custom: boolean) => ({
    transitionEnd: {
      display: 'none',
    },
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.06,
      delayChildren: 0.3,
      staggerDirection: custom ? 1 : -1,
    },
  }),
  show: (custom: boolean) => ({
    zIndex: 4,
    display: 'block',
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
      staggerDirection: custom ? 1 : -1,
    },
  }),
};

const childrenTransition = {
  transition: {
    duration: 0.35,
  },
};

const childrenVariants = {
  hidden: {
    y: [0, -100],
    transition: {
      duration: 0.1,
    },
  },
  show: {
    y: [100, 0],
    ...childrenTransition,
  },
};

const backdropVariants = {
  hidden: {
    height: 0,
    skewY: [0, 2.5, 0],
    transition: {
      duration: 0.5,
      skewY: {
        delay: 0.1,
      },
    },
  },
  show: {
    height: '100%',
    skewY: [0, 2.5, 0],
    transition: {
      duration: 0.4,
      skewY: {
        delay: 0.1,
      },
    },
  },
};

const listVariants = {
  show: {
    transition: {
      staggerChildren: 0.23,
      delayChildren: 0.25,
    },
  },
  hidden: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

export {
  menuVariants,
  backdropVariants,
  listVariants,
  childrenTransition,
  childrenVariants,
};
