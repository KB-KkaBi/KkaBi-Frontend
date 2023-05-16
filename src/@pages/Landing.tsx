import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/@components";

const Landing = () => {
  let navigate = useNavigate();

  return (
    <div>
      <h1>Landing Page</h1>
      <Button onClick={() => navigate("/register")}>회원가입</Button>
      <Button onClick={() => navigate("/login")}>로그인</Button>
    </div>
  );
};

export default Landing;
