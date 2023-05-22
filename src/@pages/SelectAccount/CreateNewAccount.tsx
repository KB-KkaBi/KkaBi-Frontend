import { Button, PaperLayout } from "@/@components";
import Card from "@/@components/common/card/Card";
import React from "react";
import { styled } from "styled-components";
import { ACCOUNTS_DATA } from "@/core/accountsData";
import CardContent from "@/@components/common/card/CardContent";

const CreateNewAccount = () => {
  function moveToCreateAccountName() {}

  return (
    <CreateNewAccountWrapper>
      <PaperLayout>
        <Title>계좌를 선택해주세요</Title>
        <CardContainer>
          <CardWrapper>
            {ACCOUNTS_DATA.map(({ accountId, title, content }) => (
              <>
                {accountId % 2 !== 0 ? (
                  <>
                    <CardContent title={title} content={content} />
                    <Card account={accountId} />
                  </>
                ) : (
                  <>
                    <Card account={accountId} />
                    <CardContent title={title} content={content} />
                  </>
                )}
              </>
            ))}
          </CardWrapper>
        </CardContainer>
        <ButtonWrapper>
          <Button onclick={moveToCreateAccountName}>확인</Button>
        </ButtonWrapper>
      </PaperLayout>
    </CreateNewAccountWrapper>
  );
};

export default CreateNewAccount;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CreateNewAccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  width: 100rem;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;

  ${({ theme }) => theme.fonts.button}
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
