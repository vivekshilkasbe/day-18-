import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const id = 100;
  // const cardCss = "bg-info text-light fs-3 p-4 mb-1";
  const list = [1, 1, 1];
  const [cardCss, setCardcss] = useState("bg-primary text-light fs-3 p-4 mb-1");
  const primaryTheme = () => setCardcss("bg-info text-light fs-3 p-4 mb-1");
  const dangerTheme = () => setCardcss("bg-danger text-light fs-3 p-4 mb-1");
  const darkTheme = () => setCardcss("bg-dark text-light fs-3 p-4 mb-1");
  return (
    <div>
      <input
        type="button"
        value="PrimaryTheme"
        className="btn btn-primary btn-sm"
        onClick={primaryTheme}
      />
      <input
        type="button"
        value="DangerTheme"
        className="btn btn-danger btn-sm"
        onClick={dangerTheme}
      />
      <input
        type="button"
        value="DarkTheme"
        className="btn btn-dark btn-sm"
        onClick={darkTheme}
      />
      {list.map(() => (
        <div className={cardCss}>
          WPT Session- Shared screen with speaker view
        </div>
      ))}
    </div>
  );

  // return (
  //   <div>
  //     <h1>Interpolation {id} </h1>
  //     <h1>Interpolation {id + 100} </h1>
  //     <h1 id="1" className="bg-primary">
  //       Interpolation {id + 100}
  //     </h1>
  //     <h1 id={id} className={background}>
  //       Interpolation {id + 100}{" "}
  //     </h1>
  //   </div>
  // );
}
