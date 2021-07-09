import React, { Component } from 'react';
import MyName from './Study/MyName';
import PropTypes from 'prop-types';
import './App.css';

// function App() {
//   const name = 'react';
//   const style = {
//     backgroundColor: 'black',
//     color: 'aqua',
//     fontSize: 24,
//     padding: '1rem',
//   };

//   return (
//     <>
//       {/* Fragment */}
//       <Hello
//       // 열리는 태그 내부 주석
//       />
//       <div style={style}>{name}</div>
//       <div className="gray-box"></div>
//     </>
//   );
// }

class App extends Component {
  render() {
    return <MyName name="박성훈" />;
  }
}

propTypes = {
  name: PropTypes.string,
};

export default App;
