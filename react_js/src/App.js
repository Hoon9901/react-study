import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import MyName from './MyName';
import Counter from './goHooks/Counter'
import Info from './goHooks/info';
import ContextSample from './goHooks/ContextSample';

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
      {visible && <Info/>}
      <ContextSample/>
    </>
  );
};

export default App;
