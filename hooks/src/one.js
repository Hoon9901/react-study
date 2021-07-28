import React, { useState } from "react";

function Fone() {
  const [item, setItem] = useState(0);
  const IncreaseItem = () => setItem(item + 1);
  const DecreaseItem = () => setItem(item - 1);
  return (
    <div>
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={IncreaseItem}>Increment</button>
      <button onClick={DecreaseItem}>Decrement</button>
    </div>
  );
}

export default Fone;
