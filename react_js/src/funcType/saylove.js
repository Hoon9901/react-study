import React, {useEffect, useState} from 'react';

const SayLove = () => {
    // 비구조화 할당
    // useState함수의 반환 : value(현재 상태값), setValue(함수)
    const [value, setValue] = useState(0);  // value : 원소의 현재 상태값, setValue 상태를 설정하는 Setter 함수
    const [isModalActive, setIsModalActive] = useState(false);

    /*
    useEffect(() => {
        console.log('최초 렌더링이 완료되었습니다.');
    }, []); // 함수 두번쨰 인자의 값이 바뀔때 마다 실행, 빈배열은 immutable하므로, 첫 싷행
    */
    useEffect(() => {
        console.log('렌더링이 완료되었습니다.');
        console.log({
            value, isModalActive
        });
    });
    return (
        <>
            <p>
                <b>{value}</b>만큼 사랑해
            </p>
            <button onClick={() => setValue(value + 1)}>+1</button>
            <button onClick={() => setValue(value - 1)}>-1</button>

            <button onClick={() => setIsModalActive(!isModalActive)}>modal btn</button>
        </>
    );
};

export default SayLove;