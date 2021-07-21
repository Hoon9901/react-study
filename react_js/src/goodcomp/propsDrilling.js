import React from 'react';

// Prop Drilling(threading)는 데이터가 직접적으로 필요하지 않고, 전달에만 도움이 되는
// 리액트 컴포넌트 트리의 한 부분에서 -> 다른 부분으로 데이터를 전달하는 프로세스
// 1. 간단한 토글 컴포넌트
// function Toggle() {
//     const [on, setOn] = React.useState(false);
//     const toggle = () => setOn(o => !o);
//     return (
//         <div>
//             <div>The button is {on ? 'on' : 'off'}</div>
//             <button onClick={toggle}>Toggle</button>
//         </div>
//     );
// }

// 2. 2개 컴포넌트로 리팩토링
function Toggle() {
    const [on, setOn] = React.useState(false);
    const toggle = () => setOn(o => !o);
    return <Switch on={on} onToggle={toggle} />;
}

// 컴포넌트 하위 트리 구조
function Switch({ on, onToggle }) {
    // 현 컴포넌트는 props를 필요로 하지 않으므로,
    // 필요로 하는 자식에 전달한다.
    return (
        <div>
            <SwitchMessage on={on} />
            <SwitchButton onToggle={onToggle} />
        </div>
    );
}

function SwitchMessage({ on }) {
    return <div>The button is {`${on}`}</div>;
}
function SwitchButton({ onToggle }) {
    return <button onClick={onToggle}>Toggle</button>;
}

// Toggle 에서 (on, toggle) 전달 -> Switch
// Switch 에서 (on, toggle ) 전달 -> SwitchMeesgae, SwitchButton
// props 변경시 3번 수정해야함,
export default Toggle;

// props drilling 이 무조건적으로 문제되는건 아니다
// 2~3 계층 사이에서 데이터 전달은 GOOD (데이터 흐름 쉽게 추적)
// 단점
// 계층 구조 컴포넌트 분리가 어려움, props가 변경될때마다 전역 코드 수정해야함
// 대응 -> 리덕스 또는 컴포넌트를 여러 구성 요소로 나눈다.
