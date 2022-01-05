import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  // const id = 1;
  // let counter = 1;
  let [counter, setCounter] = useState(1);

  const increament = () => {
    counter = counter + 1;
    console.log("increament called", counter);
    setCounter(counter);
  };

  return (
    <div>
      <h1>Counter Application</h1>
      <div>like {counter}</div>
      <input type="button" value="like me" onClick={increament} />
      <div>
        <h1>Like {counter}</h1>
      </div>
      <div>like {counter}</div>
      <div>like {counter}</div>
      <div>like {counter}</div>
      <div>like {counter}</div>
      <div>like {counter}</div>
      <div>like {counter}</div>
      <div>like {counter}</div>
      <div>like {counter}</div>
      <div>like {counter}</div>
      <div>like {counter}</div>
      <div>like {counter}</div>
      <div>like {counter}</div>
    </div>
  );
}
