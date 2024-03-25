import { useState } from "react";

function userData() {
  return {
    username: "",
    password: "",
    session: false,
  };
}

function Login({handleLogin}) {
  const [data, setData] = useState(userData());

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    setData((d) => {
      return {
        ...d,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleResetForm() {
    setData({
      username: "",
      password: "",
      session: false,
    });
  }

  function handleLogin () {
    console.log(data)
  }

  return (
    <>
      <input
        name="username"
        value={data.username}
        onChange={handleInputChange}
      />
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={handleInputChange}
      />
      <input
        name="session"
        type="checkbox"
        checked={data.session}
        onChange={handleInputChange}
      />
      <button onClick={handleResetForm}>Reset</button>
        <button disabled={!data.username || !data.password} onClick={handleLogin} onSubmit={handleLogin}>Login</button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default Login;
