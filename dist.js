import { h, Fragment } from "preact";
import { useState } from "preact/compat";

const TestComponent = () => {
  const [state, setState] = useState(0);
  return h(
    Fragment,
    null,
    h(
      "button",
      {
        onClick: () => {
          setState(state + 1);
        },
      },
      "add"
    ),
    h("div", null, h("span", null, "count: "), h("span", null, state)),
    "3",
    false,
    "3"
  );
};
