import { useLayoutEffect, useState } from 'react';


export const useWindowResize = (ref) => {

    const [dimensions, setDimensions] = useState({});
    const [windowSize, setWindowSize] = useState<number>(0);

    useLayoutEffect(() => {
        const handleResize = () => {
            setWindowSize(window.document.body.offsetHeight);
            setDimensions({
                offsetY: ref.current && ref.current.offsetTop,
            });
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return [dimensions, windowSize];
};
