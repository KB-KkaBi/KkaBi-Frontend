import { Button, PaperLayout } from "@/@components";
import Card from "@/@components/common/card/Card";
import { getAccountInfo, getMyAccount } from "@/api/account";
import { MyAccount } from "@/core/myAccountData";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import AccountCard from "./AccountCard";
import { useRecoilState } from "recoil";
import { bankLog } from "@/recoil/bank";

const SelectMyAccount = () => {
  const [existAccountId, setExistAccountId] = useState<number[]>([]);
  const newAccountId: number[] = [];
  const [hoverId, setHoverId] = useState<number>(-1);
  const [clickId, setClickId] = useState<number>(-1);
  const [accountMoney, setAccountMoney] = useState<number>(0);
  const [myAccountId, setMyAccountId]=useState<number>(-1);
  const navigate = useNavigate();
  console.debug(accountMoney)
  const [bankLogs, setBankLogs]=useRecoilState(bankLog);

  const {data: myAccountData} = useQuery(["myAccount"], getMyAccount);
  const {data: accountListData}=useQuery(["accountLis"], getAccountInfo);

  function checkExistAccount() {
    myAccountData?.map((accountData:any) => {
      if (!newAccountId.includes(accountData?.accountInfo?.accountInfoId)) {
        newAccountId.push(accountData?.accountInfo?.accountInfoId);
      }
    });
    setExistAccountId(newAccountId);
  }

  function checkIsHoverOfClick(id: number) {
  
    return id === clickId || (id === hoverId && hoverId !== -1);
  }

  function chooseAccount(id: number) {

    setMyAccountId(myAccountData?.filter((acc:MyAccount) => acc?.accountInfo?.accountInfoId === id)[0]?.accountId)
    setClickId(id);
    setAccountMoney(myAccountData?.filter((acc:MyAccount) => acc?.accountInfo?.accountInfoId === id)[0]?.accountMoney);
  }

  function moveToBank() {
    console.debug("myAccountId"+myAccountId)
    console.debug("accountMoney"+accountMoney)
    setBankLogs(prev=>({...prev,accountId:myAccountId, accountLogMoney:accountMoney }))

    navigate("../my-account");
  }

  useEffect(()=>{
    !existAccountId.length&&checkExistAccount();
  },[existAccountId])

  function chooseHover(id:number){
     setHoverId(id)
  }
  
  return (
    <SelectMyAccountWrapper>
      <PaperLayout>
        <Title>계좌를 선택해주세요</Title>
        <CardBox>
          <CardContainer>
            {accountListData?.map(( account:any ) => (
              <div key={account.accountInfoId}>
                {account?.accountInfoId % 2 !== 0 ? (
                  <AccountWrapper>
                    {existAccountId?.includes(account?.accountInfoId) ? (
                      <AccountTitle $isEven={false}>
                        {myAccountData?.filter((acc:MyAccount) => acc?.accountInfo?.accountInfoId === account?.accountInfoId)[0]?.accountName}
                      </AccountTitle>
                    ) : (
                      <AccountTitle $isEven={false}></AccountTitle>
                    )}
                    
                    <CardWrapper key={account.accountInfoId} $isExist={existAccountId.includes(account.accountInfoId)}>
                      <AccountCard
                        key={account.accountInfoId}
                        account={account.accountInfoId}
                        onClick={()=>chooseAccount(account.accountInfoId)}
                        isClicked={(checkIsHoverOfClick(account.accountInfoId))}
                        onMouseEnter={()=>chooseHover(account.accountInfoId)}
                        onMouseOut={() => setHoverId(-1)}
                         />
                    </CardWrapper>
                  </AccountWrapper>
                ) : (
                  <AccountWrapper>
                    <CardWrapper key={account.accountInfoId} $isExist={existAccountId.includes(account.accountInfoId)}>
                      <AccountCard 
                        key={account.accountInfoId}
                        account={account.accountInfoId}
                        onClick={()=>chooseAccount(account.accountInfoId)}
                        isClicked={(checkIsHoverOfClick(account.accountInfoId))}
                        onMouseEnter={() => setHoverId(account.accountInfoId)}
                        onMouseOut={() => setHoverId(-1)} />
                    </CardWrapper>
                    {existAccountId?.includes(account.accountInfoId) ? (
                      <AccountTitle $isEven={true}>
                        {myAccountData?.filter((acc:MyAccount) => acc?.accountInfo.accountInfoId  === account.accountInfoId)[0]?.accountName}
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

const AccountWrapper = styled.div`
  display: flex;
`;
