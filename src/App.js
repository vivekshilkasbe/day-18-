import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
      {/* <MyComponent /> */}
    </>
  );
}

function MyComponent() {
  const [ajaxList, setAjaxList] = useState([]);

  const makeAjaxCall = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const result = await response.json();
    setAjaxList(result);
    // console.log(result);
  };

  return (
    <div>
      <h1> Hello React And Ajax</h1>
      <input type="button" value="Make Ajax Call" onClick={makeAjaxCall} />

      {ajaxList.map((item, index) => (
        <div className="alert alert-primary" key={index}>
          {item.title} {item.id}
          {item.userId}
        </div>
      ))}
    </div>
  );
}
