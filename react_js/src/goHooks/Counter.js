import React, {useState} from 'react';

const Counter = () => {
    const [value, setValue] = useState(0);  // 비구조화 문법
    /**
     * or const value = useState(0);
     *  value[0], value[1];
     */

    return (
        <>
            <p>
                현재 카운터 값은 <b>{value}</b> 입니다.
            </p>
            <button onClick = {() => setValue(value + 1)}>+1</button>
            <button onClick = {() => setValue(value - 1)}>-1</button>
        </>
    );
}

export default Counter;