import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import MyName from './MyName';
import Counter from './goHooks/Counter'
import Info from './goHooks/info';
import ContextSample from './goHooks/ContextSample';
import Info2 from './goHooks/info2';
import Hello from './ifrender/hello';
import IterationSample from './recomponent/IterationSample';
import EventPractice from './EventStudy/EventPractice';

const App = () => {
  const [visible, setVisible] = useState(false);
  return(
    <>
      <MyName name = "박성훈"/>
      <Counter/>
      <button onClick={() => {setVisible(!visible);}}>
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info2/>}
      <Hello name="박성훈" color = "red" isSpecial/>
      <Hello color = "pink"/>
      <IterationSample/>
      <EventPractice />
    </>
  );
};

export default App;
