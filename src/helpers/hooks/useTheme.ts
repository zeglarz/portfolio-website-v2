import { useEffect, useState } from 'react';


export const useTheme = () => {
    const storage = window.localStorage;
    const isDark = (storage.getItem('isDarkTheme') || window.matchMedia('(prefers-color-scheme: dark)').matches.toString()) === 'true';

    const [theme, setTheme] = useState(isDark);

    useEffect(() => {
        theme ? storage.setItem('isDarkTheme', 'true') : storage.setItem('isDarkTheme', 'false');
    }, [storage, theme]);

    const switchTheme = () => setTheme(!theme);

    return [theme, switchTheme];
};

export default useTheme;
