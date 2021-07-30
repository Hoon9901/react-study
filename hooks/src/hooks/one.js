import React, { useState } from "react";

// eslint-disable-next-line
const useInput = (initalValue, validator) => {
  const [value, setValue] = useState(initalValue);
  const onChange = (event) => {
    // 객체 리터럴로 event의 target value 가져온다.
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

function Fone() {
  const maxOfLength = (value) => value.includes("@");
  const name = useInput("Mr.", maxOfLength);
  return (
    <div>
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}

export default Fone;
