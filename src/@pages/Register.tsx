import { TextField, PaperLayout, Button } from "@/@components";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Register = () => {
  const navigate = useNavigate();

  return (
    <PaperLayout
      handleClick={() => {
        navigate(-1);
      }}>
      <InputContainer>
        <EmailInputWrapper>
          <p>EMAIL</p>
          <TextField placeholder="이메일을 입력해주세요" />
        </EmailInputWrapper>
        <PasswordInputWrapper>
          <p>PASSWORD</p>
          <TextField placeholder="비밀번호를 입력해주세요" />
        </PasswordInputWrapper>
        <PasswordConfirmInputWrapper>
          <p>PASSWORD CONFIRM</p>
          <TextField placeholder="비밀번호를 다시 입력해주세요" />
        </PasswordConfirmInputWrapper>
        <Button>확인</Button>
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
