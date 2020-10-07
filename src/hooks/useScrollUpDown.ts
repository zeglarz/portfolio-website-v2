import { useEffect, useState } from 'react';


enum Direction {
    up = 'up',
    down = 'down'
}

const useScrollDirection = (initialDirection = Direction.down, thresholdPixels = 0, off = false) => {
    const [scrollDir, setScrollDir] = useState(initialDirection);

    useEffect(() => {
        const threshold = thresholdPixels;
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }

            setScrollDir(scrollY > lastScrollY ? Direction.down : Direction.up);
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        !off ? window.addEventListener('scroll', onScroll) : setScrollDir(initialDirection);

        return () => window.removeEventListener('scroll', onScroll);
    }, [initialDirection, thresholdPixels, off]);

    return scrollDir;
};

export default useScrollDirection;
