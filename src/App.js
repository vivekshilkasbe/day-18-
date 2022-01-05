import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  //1. 2= value={message}
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  //3.
  const processMessage = (e) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
  };
  //4.
  const addTweet = () => {
    console.log(message);
    const newMessageList = [message, ...messageList];
    setMessageList(newMessageList);
    setMessage("");
  };

  return (
    <div>
      <h1>Input Operation</h1>
      <input
        type="text"
        name=""
        value={message}
        placeholder="whats app"
        onChange={processMessage}
      />
      <input type="button" value="tweet" onClick={addTweet} />
      {messageList.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}
