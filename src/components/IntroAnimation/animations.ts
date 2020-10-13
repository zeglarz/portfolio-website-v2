export const pathVariants = {
  start: {
    opacity: 0,
    pathLength: 0,
  },
  end: {
    opacity: 1,
    pathLength: 1.0,
    transition: {
      duration: 1.5,
      ease: 'easeInOut',
    },
  },
};

export const endPathVariants = {
  end: {
    scale: [1.0, 1.15, 0],
    opacity: [1, 0],
    transition: {
      duration: 0.5,
      delay: 2.2,
      ease: 'easeOut',
    },
  },
};

export const startVariants = {
  end: {
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
  tap: {
    scale: 0.95,
  },
  hover: {
    scale: 1.2,
  },
};

export const gradientVariants = {
  end: {
    x1: ['-360%', '360%'],
    transition: {
      duration: 4,
      ease: 'easeOut',
      yoyo: Infinity,
    },
  },
};

export const rotateVariants = {
  end: {
    rotate: [-45, 90],
    transition: {
      duration: 1.5,
      ease: 'backOut',
    },
  },
};

export const textVariants = {
  end: {
    opacity: [0, 1],
    transition: {
      duration: 1.5,
      ease: 'circIn',
    },
  },
};
