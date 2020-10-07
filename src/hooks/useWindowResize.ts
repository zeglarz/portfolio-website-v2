import { useLayoutEffect, useState } from 'react';
import { useTransform, useViewportScroll } from 'framer-motion';


export const useWindowResize = (ref) => {
    const [ratio, setRatio] = useState(0);

    useLayoutEffect(() => {
        const handleResize = () => {
            if (ref.current) {
                setRatio(ref.current.offsetTop / window.document.body.offsetHeight);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [ratio]);

    const { scrollYProgress } = useViewportScroll();
    const handleRotation = useTransform(scrollYProgress, [0, ratio], [90, 360]);
    const handleMove = useTransform(scrollYProgress, [0, ratio], ['-50vw', '0vw']);
    const handleScale = useTransform(scrollYProgress, [0, ratio], [0.3, 1]);
    const handleOpacity = useTransform(scrollYProgress, [0, ratio], [0, 1]);

    return [handleRotation, handleMove, handleScale, handleOpacity];
};
