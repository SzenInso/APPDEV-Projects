import React, { useState } from 'react';

function Counter(){
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 2);
    const decrement = () => setCount(count - 2);

  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={decrement}>Decrement by 2</button>
      <button onClick={increment}>Increment by 2</button>
    </div>
  );
  
};

export default Counter;
