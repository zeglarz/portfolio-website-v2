import { MutableRefObject, useLayoutEffect, useState } from 'react';
import { MotionValue, useTransform, useViewportScroll } from 'framer-motion';

export default (
  ref: MutableRefObject<HTMLDivElement | null>
): [
  MotionValue<number>,
  MotionValue<string>,
  MotionValue<number>,
  MotionValue<number>
] => {
  const [ratio, setRatio] = useState(0);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setRatio(
          (ref.current.offsetTop - 120) / window.document.body.offsetHeight
        );
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [ref, ratio]);

  const { scrollYProgress } = useViewportScroll();
  const handleRotation = useTransform(scrollYProgress, [0, ratio], [90, 360]);
  const handleMove = useTransform(
    scrollYProgress,
    [0, ratio],
    ['-50vw', '0vw']
  );
  const handleScale = useTransform(scrollYProgress, [0, ratio], [0.3, 1]);
  const handleOpacity = useTransform(scrollYProgress, [0, ratio], [0, 1]);

  return [handleRotation, handleMove, handleScale, handleOpacity];
};
