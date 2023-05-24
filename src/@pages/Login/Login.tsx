import { Button, Modal, PaperLayout, TextField } from "@/@components";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles/loginStyle";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false); //Modal Open
  const [isLoginOk, setIsLoginOk] = useState(true); //로그인 가능한지 안한지!

  const handleModalOpen = useCallback(() => {
    setOpen(true);
  }, []);
  const handleModalClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  //login 할때 할 함수
  const handleLoginClicked = useCallback(async () => {
    console.debug(email, password, isLoginOk, setIsLoginOk);
    handleModalOpen();
    /**
     * 이메일과 비밀번호를 전송한다.
     * 결과로 status = 200이 오면 홈페이지로 가기
     * 로그인이 안되면 에러 모달 띄어주고 다시 로그인페이지로 가기
     * 로그인이 되면 사용자의 닉네임을 userNickname recoil 변수에 추가하기
     * */
  }, []);

  return (
    <PaperLayout
      handleClick={() => {
        navigate(-1);
      }}>
      <S.LoginFormContainer
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          handleLoginClicked();
        }}>
        <S.EmailInputWrapper>
          <p>EMAIL</p>
          <TextField placeholder="이메일을 입력해주세요" type="email" onChange={handleEmailChange} />
        </S.EmailInputWrapper>

        <S.PasswordInputWrapper>
          <p>PASSWORD</p>
          <TextField placeholder="비밀번호를 입력해주세요" type="password" onChange={handlePasswordChange} />
        </S.PasswordInputWrapper>
        <Button color="primary" type="submit">
          확인
        </Button>
        <Modal open={open} onClose={handleModalClose}>
          <S.ModalWrapper>
            <p className="text">잘못된 유저정보입니다.</p>
            <Button onClick={handleModalClose}>확인</Button>
          </S.ModalWrapper>
        </Modal>
      </S.LoginFormContainer>
    </PaperLayout>
  );
};

export default Login;
