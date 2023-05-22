import { Button, PaperLayout } from "@/@components";
import Card from "@/@components/common/card/Card";
import React from "react";
import { styled } from "styled-components";

const CreateNewAccount = () => {
  return (
    <>
      <PaperLayout>
        <Title>계좌를 선택해주세요</Title>
        <ButtonWrapper>
          <CardWrapper>
            <Card account={1} />
            <Card account={2} />
            <Card account={3} />
            <Card account={4} />
          </CardWrapper>
          <Button>확인</Button>
        </ButtonWrapper>
      </PaperLayout>
    </>
  );
};

export default CreateNewAccount;

const CardWrapper = styled.section`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;

  padding-top: 11rem;
  ${({ theme }) => theme.fonts.button}
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
