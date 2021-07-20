import './style.css';
import React, { useState } from 'react';
import MyName from './MyName';
import Counter from './goHooks/Counter';
import Info2 from './goHooks/info2';
import Hello from './ifrender/hello';
import IterationSample from './recomponent/IterationSample';
import EventPractice from './EventStudy/EventPractice';
import JoinForm from './goodcomp/JoinForm';

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
            <IterationSample />
            <EventPractice />
            <JoinForm />
        </>
    );
};

export default App;
