import { h } from "preact";
import { useState } from "preact";

const TestComponent = () => {
  const [state, setState] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        add
      </button>
      <div>
        <span>count: </span>
        <span>{state}</span>
      </div>
    </div>
  );
};
