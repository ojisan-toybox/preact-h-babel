import { h, Fragment } from "preact";
import { useState } from "preact/compat";

const TestComponent = () => {
  const [state, setState] = useState(0);

  return (
    <>
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
      3{false}
      {"3"}
    </>
  );
};
