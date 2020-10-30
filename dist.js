import { h } from "preact";
import { useState } from "preact";

const TestComponent = () => {
  const [state, setState] = useState(0);
  return h(
    "div",
    null,
    h(
      "button",
      {
        onClick: () => {
          setState(staet + 1);
        },
      },
      "add"
    ),
    h("div", null, h("span", null, "count: "), h("span", null, state))
  );
};
