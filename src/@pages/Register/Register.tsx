import { TextField, PaperLayout, Button, Modal } from "@/@components";
import { registerEmail, registerPassword, registerPasswordConfirm, registerSelectedCharacter } from "@/recoil/Register";
import { userNickname } from "@/recoil/User";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const Register = () => {
  const navigate = useNavigate();

  // Post 보낼 정보들
  const [email, setEmail] = useRecoilState(registerEmail);
  const [password, setPassword] = useRecoilState(registerPassword);
  const [passwordConfirm, setPasswordConfirm] = useRecoilState(registerPasswordConfirm);
  const [selectedCharacter, setSelectedCharacter] = useRecoilState(registerSelectedCharacter); // 사용자가 선택한 캐릭터 이름
  const [nickName, setNickName] = useRecoilState(userNickname);

  //Modal 관련
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const handleEmailModalOpen = useCallback(() => {
    setEmailModalOpen(true);
  }, []);
  const handleEmailModalClose = useCallback(() => {
    setEmailModalOpen(false);
  }, []);

  const handleEmailInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handlePwInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const handlePwConfirmInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(e.target.value);
  }, []);

  useEffect(() => {
    console.log("email : ", email);
    console.log("password : ", password);
    console.log("passwordConfirm : ", passwordConfirm);
    //console.log("character : ", selectedCharacter);
    //console.log("nickname : ", nickName);
  }, [email, password, passwordConfirm, selectedCharacter, nickName]);

  //이메일 중복 검사할때 사용할 함수
  const handleEmailConfirmClicked = useCallback(() => {
    /**
     * 이메일을 전송한다.
     * 결과로 status = 200이 오면 캐릭터 선택으로 넘어가기
     * 이메일이 중복이면 모달 띄워서 중복된 아이디가 존재한다고 알려주기
     * */
    if (!email) {
      handleEmailModalOpen();
    } else {
    }

    console.log("이메일 중복체크 함수 들어옴");
  }, [email]);

  return (
    <PaperLayout
      handleClick={() => {
        navigate(-1);
      }}>
      <SignUpContainer
        onSubmit={(e) => {
          e.preventDefault();
          handleEmailConfirmClicked();
        }}>
        <EmailInputWrapper>
          <p>EMAIL</p>
          <TextField placeholder="이메일을 입력해주세요" type="email" value={email} onChange={handleEmailInput} />
        </EmailInputWrapper>
        <PasswordInputWrapper>
          <p>PASSWORD</p>
          <TextField placeholder="비밀번호를 입력해주세요" type="password" onChange={handlePwInput} />
        </PasswordInputWrapper>
        <PasswordConfirmInputWrapper>
          <p>PASSWORD CONFIRM</p>
          <TextField
            placeholder="비밀번호를 다시 입력해주세요"
            type="password"
            onChange={handlePwConfirmInput}
            error={password !== passwordConfirm && passwordConfirm !== ""}
            helperText={password !== passwordConfirm && passwordConfirm !== "" && "비밀번호가 일치하지 않습니다."}
          />
        </PasswordConfirmInputWrapper>
        <Button type="submit" disabled={password !== passwordConfirm}>
          확인
        </Button>
        <Modal open={emailModalOpen} onClose={handleEmailModalClose}>
          <ModalWrapper>
            <p className="text">이메일을 입력해주세요</p>
            <Button onClick={handleEmailModalClose}>확인</Button>
          </ModalWrapper>
        </Modal>
      </SignUpContainer>
    </PaperLayout>
  );
};

export default Register;

export const SignUpContainer = styled.form`
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

  height: 22rem;
`;

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.fonts.text}
  flex-direction: column;

  .text {
    margin-bottom: 4rem;
  }
`;
