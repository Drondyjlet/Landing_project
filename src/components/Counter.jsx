import { useState } from "react";
import './Counter.css'

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3 className="counter_title">Счетчик {count}</h3>
      <div className="button_container">
        <button className="button_counter" onClick={() => setCount(count + 1)}>
          +
        </button>
        <button
          className="button_counter button_counter_minus"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <button
          className="button_counter button_counter_null"
          onClick={() => setCount(0)}
        >
          ⌧
        </button>
      </div>
    </div>
  );
}

export default Counter;
