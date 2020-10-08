import { useEffect, useState } from 'react';

export const useTheme = (): [boolean, () => void] => {
  const storage = window.localStorage;
  const isDark =
    (storage.getItem('isDarkTheme') ||
      window.matchMedia('(prefers-color-scheme: dark)').matches.toString()) ===
    'true';

  const [theme, setTheme] = useState(isDark);

  useEffect(() => storage.setItem('isDarkTheme', theme ? 'true' : 'false'), [
    storage,
    theme,
  ]);

  const switchTheme = () => setTheme(!theme);

  return [theme, switchTheme];
};

export default useTheme;
