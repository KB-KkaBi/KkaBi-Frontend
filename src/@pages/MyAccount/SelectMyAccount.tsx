import { Button, PaperLayout } from "@/@components";
import Card from "@/@components/common/card/Card";
import { ACCOUNTS_DATA, REAL_ACCOUNTS } from "@/core/accountsData";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const SelectMyAccount = () => {
  const [existAccountId, setExistAccountId] = useState<number[]>([]);
  const newAccountId: number[] = [];

  const navigate = useNavigate();

  function checkExistAccount() {
    REAL_ACCOUNTS.map(({ accountId }) => {
      if (!newAccountId.includes(accountId)) {
        newAccountId.push(accountId);
      }
    });
    setExistAccountId(newAccountId);
  }

  function moveToBank() {
    navigate("./my-account");
  }

  useEffect(() => {
    checkExistAccount();
  }, []);

  return (
    <SelectMyAccountWrapper>
      <PaperLayout>
        <Title>계좌를 선택해주세요</Title>
        <CardBox>
          <CardContainer>
            {ACCOUNTS_DATA.map(({ accountId }) => (
              <CardWrapper isExist={existAccountId.includes(accountId)}>
                <Card key={accountId} account={accountId} />
              </CardWrapper>
            ))}
          </CardContainer>
        </CardBox>
        <ButtonWrapper>
          <Button onClick={moveToBank}>확인</Button>
        </ButtonWrapper>
      </PaperLayout>
    </SelectMyAccountWrapper>
  );
};

export default SelectMyAccount;

const CardBox = styled.div`
  display: flex;

  justify-content: center;
`;

const CardContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 50rem;
  margin-top: 2rem;
`;

const CardWrapper = styled.article<{ isExist: boolean }>`
  display: flex;
  justify-content: center;

  filter: grayscale(${({ isExist }) => !isExist && 90}%);
  -webkit-filter: grayscale(${({ isExist }) => !isExist && 90}%);
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

const ButtonWrapper = styled.section`
  display: flex;
  justify-content: center;
`;
