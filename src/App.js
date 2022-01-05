import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const id = 1;
  const msg = "Hello World,How are you ";
  const btnMsg = "Click me..";
  const hello = () => {
    console.log("function called");
    alert("thank you");
  };

  return (
    <div>
      <div id={id}>{msg}</div>
      <input type="button" value={btnMsg} onClick={hello} />
    </div>
  );
}
