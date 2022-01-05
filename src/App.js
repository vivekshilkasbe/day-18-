import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [list, setList] = useState(["Hello World"]);
  const tweetHere = () => {
    const newList = [...list, "Hello Universe"];
    setList(newList);
  };
  const deleteTweet = () => {
    alert();
  };
  return (
    <div>
      <h1>workingg with input elements</h1>
      <input className="" type="text" placeholder="Ask me" />
      <input
        className=""
        type="button"
        value="Tweet here"
        onClick={tweetHere}
      />
      <input type="button" value="Delete" onClick={deleteTweet} />
      <div id="parent">
        {list.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </div>
  );
}
