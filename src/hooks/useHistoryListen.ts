import { useEffect } from 'react';
import { useHistory } from 'react-router';


export const useHistoryListen = (listener) => {
    const history = useHistory();

    useEffect(() => {
        const unlisten = history.listen(listener);
        return () => unlisten();
    }, [history, listener]);

    return history;
};
