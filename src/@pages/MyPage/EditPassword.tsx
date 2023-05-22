import { PaperLayout, TextField } from "@/@components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles/editpasswordStyle";

const EditPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState(""); // 기존비밀번호
  const [newPassword, setNewPassword] = useState(""); // 새 비밀번호
  const [newPasswordConfrim, setNewPasswordConfirm] = useState(""); // 새 비밀번호 확인

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleNewPasswordChangeConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <PaperLayout
        handleClick={() => {
          navigate(-1);
        }}>
        <S.EditPasswordFormContainer
          onSubmit={(e) => {
            e.preventDefault();
            //handleLoginClicked();
          }}>
          <S.PasswordInputWrapper>
            <p>PASSWORD</p>
            <TextField placeholder="기존 비밀번호를 입력해주세요" type="password" onChange={handlePasswordChange} />
          </S.PasswordInputWrapper>
          <S.NewPasswordInputWrapper>
            <p>NEW PASSWORD</p>
            <TextField placeholder="새 비밀번호를 입력해주세요" type="password" onChange={handlePasswordChange} />
          </S.NewPasswordInputWrapper>
        </S.EditPasswordFormContainer>
      </PaperLayout>
    </>
  );
};

export default EditPassword;
