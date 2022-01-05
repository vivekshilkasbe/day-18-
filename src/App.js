import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMobile = (e) => {
    setMobile(e.target.value);
  };
  const registerUser = () => {
    alert(`${username} ${password} ${email} ${mobile} `);
  };
  return (
    <div>
      <h1>Working with Registration </h1>
      <div>
        <input
          type="text"
          placeholder="enter Username"
          value={username}
          onChange={handleUsername}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="enter password"
          value={password}
          onChange={handlePassword}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="enter Email"
          value={email}
          onChange={handleEmail}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="enter mobile"
          value={mobile}
          onChange={handleMobile}
        />
      </div>
      <div>
        <input type="button" value="Registration" onClick={registerUser} />
      </div>
    </div>
  );
}
