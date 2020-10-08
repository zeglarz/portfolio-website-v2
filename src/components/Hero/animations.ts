import { Variants } from 'framer-motion';

const main = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const variants: Variants = {
  init: { y: 300, visibility: 'hidden' },
  animate: {
    y: 0,
    visibility: 'visible',
    transition: { duration: 0.9, ease: 'easeOut' },
  },
};

export { main, variants };
