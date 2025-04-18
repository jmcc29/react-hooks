import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
type Props = {
  n?: number;
};
export const Counter = ({ n = 1}: Props) => {
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
      <button onClick={increment} className="btn btn-outline-primary mt-2">Increment</button>{" "}
      <button onClick={decrement} className="btn btn-outline-primary mt-2">Decrement</button>{" "}
      <button onClick={reset} className="btn btn-outline-danger mt-2">Reset</button>
    </div>
  );
};
