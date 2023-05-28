import { Button, PaperLayout } from "@/@components";
import { BackArrowIcon } from "@/@components/common/icon/Icons";
import { getMyAccount } from "@/api/account";
import { MyAccount } from "@/core/myAccountData";
import { bankLog, clickedId } from "@/recoil/bank";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import AccountCard from "./AccountCard";

const SelectMyAccount = () => {
  const [existAccountId, setExistAccountId] = useState<number[]>([]);
  const newAccountId: number[] = [];
  const [hoverId, setHoverId] = useState<number>(-1);
  const [clickId, setClickId] = useRecoilState<number>(clickedId);
  const [accountMoney, setAccountMoney] = useState<number>(0);
  const [myAccountId, setMyAccountId] = useState<number>(-1);
  const navigate = useNavigate();
  console.debug(accountMoney);
  const [bankLogs, setBankLogs] = useRecoilState(bankLog);

  const { data: myAccountData } = useQuery(["myAccount"], getMyAccount);
  // const { data: accountListData } = useQuery(["accountLis"], getAccountInfo);

  function checkExistAccount() {
    myAccountData?.map((accountData: any) => {
      if (!newAccountId?.includes(accountData?.accountInfo?.accountInfoId)) {
        newAccountId?.push(accountData?.accountInfo?.accountInfoId);
      }
    });
    setExistAccountId(newAccountId);
  }

  function checkIsHoverOfClick(id: number) {
    return id === clickId || (id === hoverId && hoverId !== -1);
  }

  function chooseAccount(id: number) {
    setMyAccountId(myAccountData?.filter((acc: MyAccount) => acc?.accountInfo?.accountInfoId === id)[0]?.accountId);
    setClickId(id);
    setAccountMoney(myAccountData?.filter((acc: MyAccount) => acc?.accountInfo?.accountInfoId === id)[0]?.accountMoney);
  }

  function moveToBank() {
    console.debug("myAccountId" + myAccountId);
    console.debug("accountMoney" + accountMoney);

    setBankLogs((prev: any) => ({ ...prev, accountId: myAccountId, accountLogMoney: accountMoney }));
    if (existAccountId.includes(clickId)) {
      navigate("../my-account", { state: clickId });
    }
  }

  useEffect(() => {
    checkExistAccount();
  }, [existAccountId]);

  function chooseHover(id: number) {
    setHoverId(id);
  }

  return (
    <PaperLayout>
      <BackButtonWrapper>
        <BackArrowIcon fillColor="#5F564C" onClick={() => navigate("../")} />
      </BackButtonWrapper>
      <SelectMyAccountWrapper>
        <Title>계좌를 선택해주세요</Title>
        <CardBox>
          <CardContainer>
            {[1, 2, 3, 4]?.map((number: any) => (
              <div key={number}>
                {number % 2 !== 0 ? (
                  <AccountWrapper>
                    {existAccountId?.includes(number) ? (
                      <AccountTitle $isEven={false}>
                        {
                          myAccountData?.filter((acc: MyAccount) => acc?.accountInfo?.accountInfoId === number)[0]
                            ?.accountName
                        }
                      </AccountTitle>
                    ) : (
                      <AccountTitle $isEven={false}></AccountTitle>
                    )}

                    <CardWrapper key={number} $isExist={existAccountId.includes(number)}>
                      <AccountCard
                        key={number}
                        account={number}
                        onClick={() => chooseAccount(number)}
                        isClicked={checkIsHoverOfClick(number)}
                        onMouseEnter={() => chooseHover(number)}
                        onMouseOut={() => setHoverId(-1)}
                      />
                    </CardWrapper>
                  </AccountWrapper>
                ) : (
                  <AccountWrapper>
                    <CardWrapper key={number} $isExist={existAccountId.includes(number)}>
                      <AccountCard
                        key={number}
                        account={number}
                        onClick={() => chooseAccount(number)}
                        isClicked={checkIsHoverOfClick(number)}
                        onMouseEnter={() => setHoverId(number)}
                        onMouseOut={() => setHoverId(-1)}
                      />
                    </CardWrapper>
                    {existAccountId?.includes(number) ? (
                      <AccountTitle $isEven={true}>
                        {
                          myAccountData?.filter((acc: MyAccount) => acc?.accountInfo.accountInfoId === number)[0]
                            ?.accountName
                        }
                      </AccountTitle>
                    ) : (
                      <AccountTitle $isEven={false}></AccountTitle>
                    )}
                  </AccountWrapper>
                )}
              </div>
            ))}
          </CardContainer>
        </CardBox>
        <ButtonWrapper>
          <Button onClick={moveToBank}>확인</Button>
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

const AccountWrapper = styled.div`
  display: flex;
`;

const BackButtonWrapper = styled.section`
  position: absolute;
  margin: 1% 0 0 3%;
`;
