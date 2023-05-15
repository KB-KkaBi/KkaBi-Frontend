import React from "react";
import { Button } from "@/@components";

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <Button color="primary" onClick={() => console.log("click")}>
        로그인
      </Button>
    </div>
  );
};

export default Login;
