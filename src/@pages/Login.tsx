import React, { useRef, useState } from "react";
import { Button, Input } from "@/@components";

const Login = () => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <Input placeholder="이메일을 입력해주세요" onChange={handleEmailChange} />
      <Button color="primary" onClick={() => console.log("이메일: ", email)}>
        확인
      </Button>
    </div>
  );
};

export default Login;
