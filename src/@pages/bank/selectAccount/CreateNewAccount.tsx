import { Button, PaperLayout } from "@/@components";
import { BackArrowIcon } from "@/@components/common/icon/Icons";
import { getAccountInfo } from "@/api/account";
import { AccountTypes } from "@/core/accountsData";
import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import AccountCard from "./AccountCard";
import AccountCardContent from "./AccountCardContent";
import * as S from "./style";

const CreateNewAccount = () => {
  const [createNewAccount, setCreatenewAccount] = useState({
    accountInfoId: 0,
    accountType: "",
    interestRate: 0,
    information: "",
    dueDate: 0,
  });

  const [hoverId, setHoverId] = useState(-1);

  const navigate = useNavigate();

  const { data: accountData } = useQuery(["accountInfo"], getAccountInfo);

  function clickAccountCare(
    accountInfoId: number,
    accountType: string,
    interestRate: number,
    information: string,
    dueDate: number,
  ) {
    setCreatenewAccount({
      accountInfoId: accountInfoId,
      accountType: accountType,
      interestRate: interestRate,
      information: information,
      dueDate: dueDate,
    });
  }

  function checkIsHoverOfClick(id: number) {
    return id === createNewAccount.accountInfoId || (id === hoverId && hoverId !== -1);
  }

  function moveToCreateAccountName() {
    navigate("../create-new-account-name", { state: createNewAccount.accountInfoId });
  }

  return (
    <PaperLayout>
      <BackButtonWrapper>
        <BackArrowIcon fillColor="#5F564C" onClick={() => navigate("../")} />
      </BackButtonWrapper>
      <CreateNewAccountWrapper>
        <Title>계좌를 선택해주세요</Title>
        <CardContainer>
          <CardWrapper>
            {accountData?.map(({ accountInfoId, accountType, information, interestRate, dueDate }: AccountTypes) => (
              <div key={accountInfoId}>
                {accountInfoId % 2 !== 0 ? (
                  <S.FlexBox>
                    {checkIsHoverOfClick(accountInfoId) ? (
                      <AccountCardContent id={accountInfoId} type={accountType} infor={information} />
                    ) : (
                      <S.BlankCard></S.BlankCard>
                    )}

                    <AccountCard
                      key={accountInfoId}
                      account={accountInfoId}
                      onClick={() => clickAccountCare(accountInfoId, accountType, interestRate, information, dueDate)}
                      isClicked={checkIsHoverOfClick(accountInfoId)}
                      onMouseEnter={() => setHoverId(accountInfoId)}
                      onMouseOut={() => setHoverId(-1)}
                    />
                  </S.FlexBox>
                ) : (
                  <S.FlexBox>
                    <AccountCard
                      key={accountInfoId}
                      account={accountInfoId}
                      onClick={() => clickAccountCare(accountInfoId, accountType, interestRate, information, dueDate)}
                      isClicked={checkIsHoverOfClick(accountInfoId)}
                      onMouseEnter={() => setHoverId(accountInfoId)}
                      onMouseOut={() => setHoverId(-1)}
                    />
                    {checkIsHoverOfClick(accountInfoId) ? (
                      <AccountCardContent
                        key={accountInfoId}
                        id={accountInfoId}
                        type={accountType}
                        infor={information}
                      />
                    ) : (
                      <S.BlankCard />
                    )}
                  </S.FlexBox>
                )}
              </div>
            ))}
          </CardWrapper>
        </CardContainer>
        <ButtonWrapper>
          <Button onClick={moveToCreateAccountName}>확인</Button>
        </ButtonWrapper>
      </CreateNewAccountWrapper>
    </PaperLayout>
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

  width: 100%;
  height: 100%;
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

  margin-top: 1rem;
`;

export const BackButtonWrapper = styled.section`
  position: absolute;
  margin: 1% 0 0 3%;
`;
