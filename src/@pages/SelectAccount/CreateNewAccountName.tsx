import { Button, Modal, PaperLayout } from "@/@components";
import Input from "@/@components/common/textField/CommonTextField";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const CreateNewAccountName = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  //여기를 지우시고, 계좌를 클릭했을때 어떤 계좌인지를 저장하고 이름을 넘겨와주세요.
  const accountName = "지수네 통장";

  function handleClose() {
    setOpen(false);
  }

  function moveToBank() {
    navigate("/banks");
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
        <CreateNewAccountNameWrapper>
          <Title>계좌 이름</Title>
          <Input placeholder="계좌 이름을 입력해주세요"></Input>
          <ButtonWrapper>
            <Button onClick={() => setOpen(true)}>확인</Button>
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
