import React from "react";

function LoginPage() {
  return (
    <form action="" className="login">
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginPage;
