import { Button, Modal, PaperLayout, TextField } from "@/@components";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles/editpasswordStyle";
import { useMutation } from "react-query";
import { updatePassword } from "@/api/mypage";
import { Console } from "console";

const EditPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState(""); // 기존비밀번호
  const [newPassword, setNewPassword] = useState(""); // 새 비밀번호
  const [newPasswordConfirm, setNewPasswordConfirm] = useState(""); // 새 비밀번호 확인
  const [open, setOpen] = useState(false); //Modal Open

  const handleModalOpen = useCallback(() => {
    setOpen(true);
  }, []);
  const handleModalClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };
  const handleNewPasswordConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPasswordConfirm(e.target.value);
  };

  const {mutate: updatePost} = useMutation(updatePassword, {
    onSuccess: (response) => {
      navigate("/mypage");
    },
    onError: (error) => {
      //console.log(error);
      
      handleModalOpen();
    }
  });

  /**
     * 기존 비밀번호와 새 비밀번호를 전송한다.
     * 결과로 status = 200이 오면 마이페이지로 가기
     * 변경이 안되면 에러 모달 띄어주고 다시 마이페이지로 가기
     * 변경이 되면 마이 페이지로 가기
     *
     * */
  //login 할때 할 함수
  const handlePasswordEditClicked = () => {
    updatePost({currentPw: password, newPw: newPassword})
  }
  return (
    <>
      <PaperLayout
        handleClick={() => {
          navigate(-1);
        }}>
        <S.EditPasswordFormContainer
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            handlePasswordEditClicked();
          }}>
          <S.PasswordInputWrapper>
            <p>PASSWORD</p>
            <TextField placeholder="기존 비밀번호를 입력해주세요" type="password" onChange={handlePasswordChange} />
          </S.PasswordInputWrapper>
          <S.NewPasswordInputWrapper>
            <p>NEW PASSWORD</p>
            <TextField placeholder="새 비밀번호를 입력해주세요" type="password" onChange={handleNewPasswordChange} />
          </S.NewPasswordInputWrapper>
          <S.NewPasswordConfirmInputWrapper>
            <p>NEW PASSWORD CONFIRM</p>
            <TextField
              placeholder="새 비밀번호를 다시 입력해주세요"
              type="password"
              onChange={handleNewPasswordConfirmChange}
              error={newPassword !== newPasswordConfirm && newPasswordConfirm !== ""}
              helperText={
                newPassword !== newPasswordConfirm && newPasswordConfirm !== "" && "새 비밀번호가 일치하지 않습니다"
              }
            />
          </S.NewPasswordConfirmInputWrapper>
          <Button color="primary" type="submit" onClick={handlePasswordEditClicked} disabled={newPassword !== newPasswordConfirm}>
            확인
          </Button>
          <Modal open={open} onClose={handleModalClose}>
            <S.ModalWrapper>
              <p className="text">비밀번호가 일치하지 않습니다</p>
              <Button onClick={handleModalClose}>확인</Button>
            </S.ModalWrapper>
          </Modal>
        </S.EditPasswordFormContainer>
      </PaperLayout>
    </>
  );
};

export default EditPassword;
