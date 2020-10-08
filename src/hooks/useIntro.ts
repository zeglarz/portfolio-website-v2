import { useEffect } from 'react';

export const useIntro = (): boolean => {
  const storage = window.localStorage;
  const currTimestamp = Date.now();
  const timestamp = JSON.parse(storage.getItem('timestamp') || '1000');

  const timeLimit = 3 * 60 * 60 * 1000; // 3 hours

  const hasTimePassed = currTimestamp - timestamp > timeLimit;

  useEffect(
    () =>
      storage.setItem('timestamp', hasTimePassed ? currTimestamp : timestamp),
    []
  );
  return hasTimePassed;
};

export default useIntro;
