import { Button, PaperLayout } from "@/@components";
import Card from "@/@components/common/card/Card";
import { getMyAccount } from "@/api/account";
import { MyAccount } from "@/core/myAccountData";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const SelectMyAccount = () => {
  const [existAccountId, setExistAccountId] = useState<number[]>([]);
  const newAccountId: number[] = [];

  const navigate = useNavigate();

  const {data: myAccountData} = useQuery(["myAccount"], getMyAccount);

  function checkExistAccount() {
    myAccountData.map(( accountId:number ) => {
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
            {myAccountData.map(( accountId:number ) => (
              <>
                {accountId % 2 !== 0 ? (
                  <>
                    {existAccountId.includes(accountId) ? (
                      <AccountTitle $isEven={false}>
                        {myAccountData.filter((acc:MyAccount) => acc?.accountId === accountId)[0]?.name}
                      </AccountTitle>
                    ) : (
                      <AccountTitle $isEven={false}></AccountTitle>
                    )}
                    <CardWrapper key={accountId} $isExist={existAccountId.includes(accountId)}>
                      <Card account={accountId} />
                    </CardWrapper>
                  </>
                ) : (
                  <>
                    <CardWrapper key={accountId} $isExist={existAccountId.includes(accountId)}>
                      <Card account={accountId} />
                    </CardWrapper>
                    {existAccountId.includes(accountId) ? (
                      <AccountTitle $isEven={true}>
                        {myAccountData.filter((acc:MyAccount) => acc?.accountId === accountId)[0]?.name}
                      </AccountTitle>
                    ) : (
                      <AccountTitle $isEven={false}></AccountTitle>
                    )}
                  </>
                )}
              </>
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
