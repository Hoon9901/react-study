import React from 'react';
import PropTypes from 'prop-types';

class Welcome extends React.Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return <h1>Hello</h1>;
  }
}

function ReUse() {
  return (
    <>
      <Welcome />
      <Welcome />
      <Welcome />
    </>
  );
}

export default ReUse;
