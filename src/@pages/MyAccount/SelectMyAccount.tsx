import { PaperLayout } from "@/@components";
import Card from "@/@components/common/card/Card";
import { ACCOUNTS_DATA, REAL_ACCOUNTS } from "@/core/accountsData";
import React from "react";
import { styled } from "styled-components";

const SelectMyAccount = () => {
  return (
    <SelectMyAccountWrapper>
      <PaperLayout>
        <Title>계좌를 선택해주세요</Title>
        <CardContainer>
          {ACCOUNTS_DATA.map(({ accountId }) => (
            <CardWrapper isExist={REAL_ACCOUNTS.includes({ accountId })}>
              <Card key={accountId} account={accountId} />
            </CardWrapper>
          ))}
        </CardContainer>
      </PaperLayout>
    </SelectMyAccountWrapper>
  );
};

export default SelectMyAccount;

const CardContainer = styled.section`
  display: flex;
`;
const CardWrapper = styled.article`
  background-color: ${({ isExist }) => isExist && "rgba(0, 0, 0, 50)"};
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;

  padding-top: 3rem;

  ${({ theme }) => theme.fonts.button}
`;

const SelectMyAccountWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
