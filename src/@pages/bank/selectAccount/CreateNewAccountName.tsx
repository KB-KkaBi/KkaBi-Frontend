import { Button, Modal, PaperLayout } from "@/@components";
import { BackArrowIcon } from "@/@components/common/icon/Icons";
import Input from "@/@components/common/textField/CommonTextField";
import { postNewAccount } from "@/api/account";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { BackButtonWrapper } from "./CreateNewAccount";

const CreateNewAccountName = () => {
  const { state } = useLocation();

  const [open, setOpen] = useState(false);
  const [accountName, setAccountName] = useState("");
  const navigate = useNavigate();

  const { mutate: createNewAccount } = useMutation(postNewAccount, {
    onSuccess: () => {
      setOpen(true);
    },
    onError: (error) => {
      console.debug(error);
    },
  });

  function confirmNewAccount() {
    createNewAccount({ accountInfoId: state, accountName: accountName });
  }

  function checkAccountName(e: React.ChangeEvent<HTMLInputElement>) {
    setAccountName(e.target.value);
  }

  function handleClose() {
    setOpen(false);
  }

  function moveToBank() {
    navigate("/bank");
  }

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <ModalContent>
          <TextWrapper>
            <p>{accountName}</p>
            <p>개설이 완료되었습니다</p>
          </TextWrapper>
          <Button onClick={moveToBank}>확인</Button>
        </ModalContent>
      </Modal>
      <PaperLayout>
        <BackButtonWrapper>
          <BackArrowIcon fillColor="#5F564C" onClick={() => navigate("../create-new-account")} />
        </BackButtonWrapper>
        <CreateNewAccountNameWrapper>
          <Title>계좌 이름</Title>
          <Input placeholder="계좌 이름을 입력해주세요" onChange={checkAccountName}></Input>
          <ButtonWrapper>
            <Button onClick={confirmNewAccount}>확인</Button>
          </ButtonWrapper>
        </CreateNewAccountNameWrapper>
      </PaperLayout>
    </>
  );
};

export default CreateNewAccountName;

const Title = styled.h1`
  width: 60rem;
  ${({ theme }) => theme.fonts.text};
`;

const CreateNewAccountNameWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 1rem;

  ${({ theme }) => theme.fonts.button}

  & > p:nth-child(1) {
    color: ${({ theme }) => theme.colors.main};
  }
`;
