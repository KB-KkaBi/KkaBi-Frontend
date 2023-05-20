import { TextField, PaperLayout, Button } from "@/@components";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleEmailInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handlePwInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const handlePwConfirmInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(e.target.value);
  }, []);

  // useEffect(() => {
  //   console.log("email : ", email);
  //   console.log("password : ", password);
  //   console.log("passwordConfirm : ", passwordConfirm);
  // }, [email, password, passwordConfirm]);

  return (
    <PaperLayout
      handleClick={() => {
        navigate(-1);
      }}>
      <InputContainer>
        <EmailInputWrapper>
          <p>EMAIL</p>
          <TextField placeholder="이메일을 입력해주세요" type="email" value={email} onChange={handleEmailInput} />
        </EmailInputWrapper>
        <PasswordInputWrapper>
          <p>PASSWORD</p>
          <TextField placeholder="비밀번호를 입력해주세요" type="password" value={password} onChange={handlePwInput} />
        </PasswordInputWrapper>
        <PasswordConfirmInputWrapper>
          <p>PASSWORD CONFIRM</p>
          <TextField
            placeholder="비밀번호를 다시 입력해주세요"
            type="password"
            value={passwordConfirm}
            onChange={handlePwConfirmInput}
            error={password !== passwordConfirm}
          />
        </PasswordConfirmInputWrapper>
        <Button
          onClick={() => {
            navigate("/register/profile");
          }}>
          확인
        </Button>
      </InputContainer>
    </PaperLayout>
  );
};

export default Register;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.fonts.text}
`;

export const EmailInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const PasswordInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const PasswordConfirmInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;
