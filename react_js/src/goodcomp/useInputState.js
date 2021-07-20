import { useState, useCallback } from 'react';

function useInputState(defaultState) {
    const [state, setState] = useState(defaultState);

    const handleChangeState = useCallback(({ target: { value } }) => {
        console.log('handleChangeState');
        setState(value);
    }, []);

    return [state, setState, handleChangeState];
}

export default useInputState;
