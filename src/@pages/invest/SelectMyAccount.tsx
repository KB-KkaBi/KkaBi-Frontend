import { Button, PaperLayout } from "@/@components";
import Card from "@/@components/common/card/Card";
import { BackArrowIcon } from "@/@components/common/icon/Icons";
import { getMyAccount } from "@/api/treasure";
import { investInfo } from "@/recoil/Invest";
import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const SelectMyAccount = () => {
  const { data: myAccount } = useQuery(["myAccount"], getMyAccount);
  const [investData, setInvestData] = useRecoilState(investInfo);
  const [hoverId, setHoverId] = useState<number>(-1);
  const [clickId, setClickId] = useState<number>(-1);
  const [accountMoney, setAccountMoney] = useState<number>(0);

  const navigate = useNavigate();

  function checkDepositAccount(id: number) {
    return id === 3 || id === 4;
  }

  function checkIsHoverOfClick(id: number) {
    return id === clickId || (id === hoverId && hoverId !== -1);
  }

  function selectDepositAccount() {
    if (clickId !== -1) {
      setInvestData((prev) => ({ ...prev, accountId: clickId }));
      navigate("./select-treasure", { state: accountMoney });
      console.debug(investData);
    }
  }

  console.debug(investData);

  function chooseAccount(id: number, money: number) {
    setClickId(id);
    setAccountMoney(money);
  }

  return (
    <PaperLayout>
      <BackButtonWrapper>
        <BackArrowIcon
          fillColor="#5F564C"
          onClick={() => {
            navigate("../../home");
          }}
        />
      </BackButtonWrapper>
      <SelectMyAccountWrapper>
        <Title>계좌를 선택해주세요</Title>
        <CardBox>
          <CardContainer>
            {myAccount?.map((account: any) => (
              <div key={account.accountId}>
                {checkDepositAccount(account.accountInfo.accountInfoId) && (
                  <AccountWrapper>
                    {account.accountInfo.accountInfoId % 2 !== 0 ? (
                      <AccountWrapper>
                        <AccountTitle $isEven={false}>{account.accountName}</AccountTitle>
                        <CardWrapper key={account.accountInfoId} $isExist={true}>
                          <Card
                            key={account.accountId}
                            account={account.accountInfo.accountInfoId}
                            $isClicked={checkIsHoverOfClick(account.accountId)}
                            onClick={() => chooseAccount(account.accountId, account.accountMoney)}
                            onMouseEnter={() => setHoverId(account.accountId)}
                            onMouseOut={() => setHoverId(-1)}
                          />
                        </CardWrapper>
                      </AccountWrapper>
                    ) : (
                      <AccountWrapper>
                        <CardWrapper key={account.accountInfoId} $isExist={true}>
                          <Card
                            key={account.accountId}
                            account={account.accountInfo.accountInfoId}
                            $isClicked={checkIsHoverOfClick(account.accountId)}
                            onClick={() => chooseAccount(account.accountId, account.accountMoney)}
                            onMouseEnter={() => setHoverId(account.accountId)}
                            onMouseOut={() => setHoverId(-1)}
                          />
                        </CardWrapper>
                        <AccountTitle $isEven={true}>{account.accountName}</AccountTitle>
                      </AccountWrapper>
                    )}
                  </AccountWrapper>
                )}
              </div>
            ))}
          </CardContainer>
        </CardBox>
        <ButtonWrapper>
          <Button onClick={selectDepositAccount}>확인</Button>
        </ButtonWrapper>
      </SelectMyAccountWrapper>
    </PaperLayout>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const ButtonWrapper = styled.section`
  display: flex;
  justify-content: center;

  margin-top: 2rem;
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

const BackButtonWrapper = styled.section`
  position: absolute;
  margin: 1% 0 0 3%;
`;

const AccountWrapper = styled.div`
  display: flex;
`;
