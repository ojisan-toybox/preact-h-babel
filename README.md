# preact-h-babel

preact で jsx を babel でトランスパイルしてどのような h 関数が吐かれるかを見る

```
npm install

npx babel -o dist.js
```

before...

```jsx
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
```

after

```js
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
```
