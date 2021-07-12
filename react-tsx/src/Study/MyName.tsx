import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyName extends Component {
  render() {
    return (
      <div>
        안녕하세요 <b>{this.props.name}</b> 입니다.
      </div>
    );
  }
}

proptypes = {
  name: PropTypes.string,
};

export default MyName;
