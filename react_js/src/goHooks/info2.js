import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return state;
    case 'set':
      console.log("hdz");
      return {
        ...state,
        [action.name]: action.value,
      };
    default : 
      return state;
  }
}

const Info2 = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: '',
  });
  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch({ type: 'set' });
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info2;
