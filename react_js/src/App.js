import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyName from './MyName';
import Counter from './Counter';

class App extends React.Component{
  render() {
    return (
      <>
        <MyName name = "박성훈"/>
        <Counter/>
      </>
    );
  }
}

export default App;
