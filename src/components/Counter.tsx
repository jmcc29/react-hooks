import { useState } from "react";

type Props = {
  n?: number;
};
const Counter = ({ n = 1}: Props) => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount((prevCount) => prevCount + n);
    };
    const decrement = () => {
        setCount((prevCount) => prevCount - n);
    };
    const reset = () => {   
        setCount(0);
    };
    return (
    <div>
      <h3 style={{ textAlign: "center" }}>Counter: {count}</h3>
      <button onClick={increment}>Increment</button>{" "}
      <button onClick={decrement}>Decrement</button>{" "}
      <button onClick={reset}>Reset</button>
    </div>
  );
};
export default Counter;
