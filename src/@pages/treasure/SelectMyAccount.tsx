import { Button, PaperLayout } from "@/@components";
import Card from "@/@components/common/card/Card";
import { getMyAccount } from "@/api/treasure";
import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SelectMyAccount = () => {
  const { data: myAccount } = useQuery(["myAccount"], getMyAccount);

  const [hoverId, setHoverId] = useState<number>(-1);
  const [clickId, setClickId] = useState<number>(-1);

  const navigate = useNavigate();

  function checkDepositAccount(id: number) {
    return id === 3 || id === 4;
  }

  console.log(myAccount);

  function checkIsHoverOfClick(id: number) {
    return id === clickId || (id === hoverId && hoverId !== -1);
  }

  return (
    <SelectMyAccountWrapper>
      <PaperLayout>
        <Title>계좌를 선택해주세요</Title>
        <CardBox>
          <CardContainer>
            {myAccount &&
              myAccount.map((account: any) => (
                <>
                  {checkDepositAccount(account.accountInfo.accountInfoId) && (
                    <>
                      {account.accountInfo.accountInfoId % 2 !== 0 ? (
                        <>
                          <AccountTitle $isEven={false}>{account.accountName}</AccountTitle>
                          <CardWrapper key={account.accountInfoId} $isExist={true}>
                            <Card
                              key={account.accountId}
                              account={account.accountId}
                              isClicked={checkIsHoverOfClick(account.accountId)}
                              onClick={() => setClickId(account.accountId)}
                              onMouseEnter={() => setHoverId(account.accountId)}
                              onMouseOut={() => setHoverId(-1)}
                            />
                          </CardWrapper>
                        </>
                      ) : (
                        <>
                          <CardWrapper key={account.accountInfoId} $isExist={true}>
                            <Card
                              key={account.accountId}
                              account={account.accountId}
                              isClicked={checkIsHoverOfClick(account.accountId)}
                              onClick={() => setClickId(account.accountId)}
                              onMouseEnter={() => setHoverId(account.accountId)}
                              onMouseOut={() => setHoverId(-1)}
                            />
                          </CardWrapper>
                          <AccountTitle $isEven={true}>{account.accountName}</AccountTitle>
                        </>
                      )}
                    </>
                  )}
                </>
              ))}
          </CardContainer>
        </CardBox>
        <ButtonWrapper>
          <Button>확인</Button>
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

  width: 100rem;
  margin-top: 2rem;
`;

const CardWrapper = styled.article<{ $isExist: boolean }>`
  display: flex;
  justify-content: center;

  filter: grayscale(${({ $isExist }) => !$isExist && 90}%);
  -webkit-filter: grayscale(${({ $isExist }) => !$isExist && 90}%);
  opacity: ${({ $isExist }) => !$isExist && 0.4};
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

const AccountTitle = styled.p<{ $isEven: boolean }>`
  display: flex;
  justify-content: ${({ $isEven }) => ($isEven ? "flex-start" : "flex-end")};
  width: 20rem;
  height: 20rem;

  margin: 1rem;

  align-items: center;
  ${({ theme }) => theme.fonts.log}
`;
