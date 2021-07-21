import './style.css';
import React, { useState } from 'react';
import MyName from './MyName';
import Counter from './goHooks/Counter';
import Info2 from './goHooks/info2';
import Hello from './ifrender/hello';
import IterationSample from './recomponent/IterationSample';
import EventPractice from './EventStudy/EventPractice';
import JoinForm from './goodcomp/JoinForm';
import Toggle from './goodcomp/propsDrilling';

const App = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <MyName name="박성훈" />
            <Counter />
            <button
                type="button"
                onClick={() => {
                    setVisible(!visible);
                }}
            >
                {visible ? '숨기기' : '보이기'}
            </button>
            <hr />
            {visible && <Info2 />}
            <Hello name="박성훈" color="red" isSpecial />
            <Hello color="pink" />
            <hr />
            <IterationSample />
            <hr />
            <EventPractice />
            <hr />
            <JoinForm />
            <h1>좋은 컴포넌트 작성하기</h1>
            <ul>
                <li>
                    <h2>React Prop Drilling</h2>
                    <Toggle />
                </li>
            </ul>
        </>
    );
};

export default App;
