import { useState } from "react";
import Welcome from "./Welcome";

function InteractiveWelcome() {
  const [username, setUsername] = useState('')

  function handleUsernameInput(event) {
    const value = event.target.value

    setUsername(value)
  }

  return (
    <>
      <Welcome name={username}/>
      <input value={username} onChange={handleUsernameInput} />
    </>
  );
}

export default InteractiveWelcome;
