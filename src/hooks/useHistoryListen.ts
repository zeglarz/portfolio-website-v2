import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';

export default (listener: () => void): string => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const unlisten = history.listen(listener);
    return () => unlisten();
  }, [history, listener]);

  return location.pathname;
};
