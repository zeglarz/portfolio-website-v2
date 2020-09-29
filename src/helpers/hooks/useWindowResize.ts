import { useLayoutEffect, useState } from 'react';


export const useWindowResize = (ref) => {
    const [ratio, setRatio] = useState(0.9);

    useLayoutEffect(() => {
        const top = ref?.current?.offsetTop;
        const handleResize = () => {
            setRatio(top / window.document.body.offsetHeight);
            console.log('first render', top);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [ratio]);
    console.log('ratio', ratio);

    return ratio;
};
