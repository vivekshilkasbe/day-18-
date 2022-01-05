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
  const [validationError, setvalidationError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const [userList, setUserList] = useState([]);

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
    // alert(`${username} ${password} ${email} ${mobile} `);
    if (username == "" || password == "" || email == "" || mobile == "") {
      setvalidationError(true);
      return;
    }
    const user = {
      username: username,
      password: password,
      email: email,
      mobile: mobile,
    };
    const newList = [user, ...userList];
    setUserList(newList);

    // clear in the end
    setUsername("");
    setPassword("");
    setEmail("");
    setMobile("");
    setvalidationError(false);
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
          className={
            username == "" && validationError ? "border border-danger" : ""
          }
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="enter password"
          value={password}
          onChange={handlePassword}
          className={
            password == "" && validationError ? "border border-danger" : ""
          }
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="enter Email"
          value={email}
          onChange={handleEmail}
          className={
            email == "" && validationError ? "border border-danger" : ""
          }
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="enter mobile"
          value={mobile}
          onChange={handleMobile}
          className={
            mobile == "" && validationError ? "border border-danger" : ""
          }
        />
      </div>
      <div>
        <input type="button" value="Registration" onClick={registerUser} />
      </div>
      <hr />
      {userList.map((item, index) => (
        <div key={index}>
          {item.username},{item.password},{item.email},{item.mobile}
        </div>
      ))}
    </div>
  );
}
