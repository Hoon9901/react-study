import React, { useState } from "react";

// eslint-disable-next-line
const useInput = (initalValue) => {
  const [value, setValue] = useState(initalValue);
  const onChange = (event) => {
    console.log(event.target);
  };
  return { value, onChange };
};

function Fone() {
  const name = useInput("Mr.");
  return (
    <div>
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}

export default Fone;
