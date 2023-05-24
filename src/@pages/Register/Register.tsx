import { Button, PaperLayout, TextField } from "@/@components";
import { registerEmail, registerPassword, registerPasswordConfirm } from "@/recoil/Register";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const Register = () => {
  const navigate = useNavigate();

  // Post 보낼 정보들
  const [email, setEmail] = useRecoilState(registerEmail);
  const [password, setPassword] = useRecoilState(registerPassword);
  const [passwordConfirm, setPasswordConfirm] = useRecoilState(registerPasswordConfirm);
  // const [selectedCharacter, setSelectedCharacter] = useRecoilState(registerSelectedCharacter); // 사용자가 선택한 캐릭터 이름
  // const [nickName, setNickName] = useRecoilState(userNickname);

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
  //   console.log("character : ", selectedCharacter);
  //   console.log("nickname : ", nickName);
  // }, [email, password, passwordConfirm, selectedCharacter, nickName]);

  return (
    <PaperLayout
      handleClick={() => {
        navigate(-1);
      }}>
      <SignUpContainer>
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
      </SignUpContainer>
    </PaperLayout>
  );
};

export default Register;

export const SignUpContainer = styled.div`
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
