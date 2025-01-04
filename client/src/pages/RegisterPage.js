import { useState } from "react";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (response.status === 200) {
      alert("Registration Successful");
    } else {
      alert("Registration Failed try again later");
    }
  }

  return (
    <form action="" className="register" onSubmit={register}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterPage;
