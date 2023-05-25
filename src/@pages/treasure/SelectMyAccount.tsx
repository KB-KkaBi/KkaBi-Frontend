import { Button, PaperLayout } from "@/@components";
import Card from "@/@components/common/card/Card";
import { getMyAccount } from "@/api/treasure";
import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SelectMyAccount = () => {
  const { data: myAccount } = useQuery(["myAccount"], getMyAccount);
  console.log(myAccount);

  // const { data: accountInfo } = useQuery(["accountInfo"], getAccountInfo);

  const [existAccountId, setExistAccountId] = useState<number[]>([]);
  // const newAccountId: number[] = [];

  const navigate = useNavigate();

  function checkDepositAccount(id: number) {
    return id === 3 || id === 4;
  }

  // function checkExistAccount() {
  //   myAccount.map((account: any) => {
  //     // if (!newAccountId.includes(account.accountId)) {
  //     //   newAccountId.push(account.accountId);
  //     // }
  //     if (checkDepositAccount(account.accountInfo.accountInfoId)) {
  //       // newAccountId.push(account);
  //     }
  //   });
  //   // setExistAccountId(newAccountId);
  // }

  // useEffect(() => {
  //   checkExistAccount();
  // }, []);

  console.log(myAccount);

  return (
    <SelectMyAccountWrapper>
      <PaperLayout>
        <Title>계좌를 선택해주세요</Title>
        <CardBox>
          <CardContainer>
            {myAccount &&
              myAccount.map((account: any) => (
                // <>{checkDepositAccount(account.accountInfo.accountInfoId) && <Card account={account.accountId} />}</>

                <>
                  {checkDepositAccount(account.accountInfo.accountInfoId) && (
                    <>
                      {account.accountInfo.accountInfoId % 2 !== 0 ? (
                        <>
                          <AccountTitle $isEven={false}>{account.accountName}</AccountTitle>
                          <CardWrapper key={account.accountInfoId} $isExist={true}>
                            <Card account={account.accountId} />
                          </CardWrapper>
                        </>
                      ) : (
                        <>
                          <CardWrapper key={account.accountInfoId} $isExist={true}>
                            <Card account={account.accountId} />
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
