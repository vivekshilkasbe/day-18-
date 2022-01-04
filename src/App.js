export default function App() {
  return (
    <>
      <MyComponent />
      <MyComponent />
      <MyComponent />
    </>
  );
}

function MyComponent() {
  let username = "Vivekshil";
  let email = "vikky0358@gmail.com";
  let id = 100;
  let list = ["delhi", "Culcutta"];
  //carefull working with object
  let obj = { id: 1, name: "Vivek" };
  return (
    <div>
      <h1>Welcome {"Delhi".toUpperCase()}</h1>
      <h1>{username} </h1>
      <h1>{list} </h1>
      <h1>
        {obj.id}
        {obj.name}
        {` i am also js ${obj.id} and  ${obj.name}`}{" "}
      </h1>
      <p>
        loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
      </p>
    </div>
  );
}
