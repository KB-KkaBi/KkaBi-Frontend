import { TransactionLogLayout } from "@/@components";
import { getAccountLogPagenation, getTotalAccountLog } from "@/api/accountLog";
import { LeftArrow, RightArrow } from "@/assets";
import { bankLog } from "@/recoil/bank";
import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import * as S from "./style";

export type AccountLogData = {
  accountLogId: number;
  date: string;
  withdraw?: number;
  deposit?: number;
  detail?: string;
  balance: number;
};

const AccountLog = () => {
  const [page, setPage] = useState<number>(0);
  const accountInfo = {
    name: "깨비 미래 적금",
  };
  // const accountLogList: AccountLogData[] = [
  //   { accountLogId: 1, date: "2023-5-14", deposit: 10000, detail: "엄마한테 용돈 받음", balance: 10000 },
  //   { accountLogId: 2, date: "2023-5-15", deposit: 1000, detail: "설거지", balance: 11000 },
  //   { accountLogId: 3, date: "2023-5-20", withdraw: 5000, detail: "군것질", balance: 6000 },
  // ];
  const navigate = useNavigate();
  const accountId = useRecoilValue(bankLog).accountId;

  const { data: accountLogList } = useQuery(["getTotalAccountLog"], () => getTotalAccountLog(3));
  // console.log(accountLogList);

  const { data: accoutLogPagenation } = useQuery(["pagention"], () => getAccountLogPagenation(3, page));
  // console.log(accoutLogPagenation);

  function checkTotalPage() {
    const totalPage = Math.floor(accountLogList?.length / 10);
    return accountLogList?.length % 10 === 0 ? totalPage : totalPage + 1;
  }

  return (
    <TransactionLogLayout handleClick={() => navigate("../")}>
      <>
        <S.ArrowWrapper>
          <S.ArrowBox>
            <LeftArrow />
            {page} / {checkTotalPage()}
            <RightArrow />
          </S.ArrowBox>
        </S.ArrowWrapper>
        <S.TransactionTitle>{accountInfo.name}</S.TransactionTitle>
        <S.TransactionSubTitle>
          <S.TransactionDate>날짜</S.TransactionDate>
          <S.WithdrawAmount>찾으신 금액</S.WithdrawAmount>
          <S.DepositAmount>맡기신 금액</S.DepositAmount>
          <S.TransactionDetail>내역</S.TransactionDetail>
          <S.Balance>잔액</S.Balance>
        </S.TransactionSubTitle>
        <S.TransactionLogsContainer>
          {/* {accountLogList?.map((log) => {
            return <LogDetailContainer log={log} key={log.accountLogId} />;
          })} */}
        </S.TransactionLogsContainer>
      </>
    </TransactionLogLayout>
  );
};

export default AccountLog;
