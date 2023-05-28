import { Button, Modal, PaperLayout, TextField } from "@/@components";
import { postCheckEmail } from "@/api/register";
import { registerEmail, registerPassword, registerPasswordConfirm } from "@/recoil/Register";
import React, { useCallback, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const Register = () => {
  const navigate = useNavigate();

  // Post 보낼 정보들
  const [email, setEmail] = useRecoilState(registerEmail);
  const [password, setPassword] = useRecoilState(registerPassword);
  const [passwordConfirm, setPasswordConfirm] = useRecoilState(registerPasswordConfirm);

  //유효성 검사
  const [isEmail, setIsEmail] = useState(false);

  //Modal 관련
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const handleEmailModalOpen = useCallback(() => {
    setEmailModalOpen(true);
  }, []);
  const handleEmailModalClose = useCallback(() => {
    setEmailModalOpen(false);
  }, []);

  // 비밀번호 모달관련
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const handlePasswordModalOpen = useCallback(() => {
    setPasswordModalOpen(true);
  }, []);
  const handlePasswordModalClose = useCallback(() => {
    setPasswordModalOpen(false);
  }, []);

  //이메일 중복 검사 버튼
  const handleEmailInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setIsEmail(false);
    } else {
      setIsEmail(true);
    }
  }, []);

  const handlePwInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const handlePwConfirmInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(e.target.value);
  }, []);

  const { mutate: emailCheckPost } = useMutation(postCheckEmail, {
    onSuccess: () => {
      navigate("/register/profile");
    },
    onError: () => {
      handleEmailModalOpen();
    },
  });
  //이메일 중복 검사할때 사용할 함수
  const handleEmailConfirmClicked = () => {
    /**
     * 이메일을 전송한다.
     * 결과로 status = 200이 오면 캐릭터 선택으로 넘어가기
     * 이메일이 중복이면 모달 띄워서 중복된 아이디가 존재한다고 알려주기
     * */
    if (password) {
      emailCheckPost({ email: email });
    } else {
      handlePasswordModalOpen();
    }
  };

  return (
    <PaperLayout
      handleClick={() => {
        navigate("/");
      }}>
      <SignUpContainer>
        <EmailInputWrapper>
          <p>EMAIL</p>
          <TextField
            placeholder="이메일을 입력해주세요"
            type="text"
            onChange={handleEmailInput}
            error={!isEmail && email !== ""}
            helperText={!isEmail && email !== "" && "이메일 형식이 아니에요"}
          />
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
        <Button type="button" disabled={password !== passwordConfirm || !isEmail} onClick={handleEmailConfirmClicked}>
          확인
        </Button>
        <Modal open={emailModalOpen} onClose={handleEmailModalClose}>
          <ModalWrapper>
            <p className="text">중복된 이메일입니다</p>
            <Button onClick={handleEmailModalClose}>확인</Button>
          </ModalWrapper>
        </Modal>
        <Modal open={passwordModalOpen} onClose={handlePasswordModalClose}>
          <ModalWrapper>
            <p className="text">비밀번호를 입력해주세요</p>
            <Button onClick={handlePasswordModalClose}>확인</Button>
          </ModalWrapper>
        </Modal>
      </SignUpContainer>
    </PaperLayout>
  );
};

export default Register;

export const SignUpContainer = styled.section`
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
  height: 21rem;
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
