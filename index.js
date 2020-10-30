import { h } from "preact";
import { useState } from "preact";

const TestComponent = () => {
  const [state, setState] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setState(staet + 1);
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
