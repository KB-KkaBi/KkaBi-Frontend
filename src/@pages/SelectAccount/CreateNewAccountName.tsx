import { Button, PaperLayout } from "@/@components";
import Modal from "@/@components/common/textField/CommonTextField";
import React from "react";
import { styled } from "styled-components";

const CreateNewAccountName = () => {
  return (
    <PaperLayout>
      <CreateNewAccountNameWrapper>
        <Title>계좌 이름</Title>
        <Modal placeholder="계좌 이름을 입력해주세요"></Modal>
        <ButtonWrapper>
          <Button>확인</Button>
        </ButtonWrapper>
      </CreateNewAccountNameWrapper>
    </PaperLayout>
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
