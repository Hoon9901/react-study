import React from 'react';
import PropType from 'prop-types';

function Hello() {
  return <div>안녕하세요 </div>;
}

Hello.proptype = {
  name: PropType.string,
};

export default Hello;
