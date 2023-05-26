import { TransactionLogLayout } from "@/@components";
import { getAccountLogPagenation, getAccountName, getTotalAccountLog } from "@/api/accountLog";
import { LeftArrow, RightArrow } from "@/assets";
import { bankLog } from "@/recoil/bank";
import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { LogDetailContainer } from "..";
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
  const [page, setPage] = useState<number>(1);
  const navigate = useNavigate();
  const accountId = useRecoilValue(bankLog).accountId;

  const { data: accountName } = useQuery(["accountName"], () => getAccountName(3));
  // 전체 불러오기
  const { data: accountLogList } = useQuery(["getTotalAccountLog"], () => getTotalAccountLog(3));
  // 페이지네이션
  const { data: accoutLogPagenation } = useQuery(["pagention"], () => getAccountLogPagenation(3, page));

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
        <S.TransactionTitle>{accountName}</S.TransactionTitle>
        <S.TransactionSubTitle>
          <S.TransactionDate>날짜</S.TransactionDate>
          <S.WithdrawAmount>찾으신 금액</S.WithdrawAmount>
          <S.DepositAmount>맡기신 금액</S.DepositAmount>
          <S.TransactionDetail>내역</S.TransactionDetail>
          <S.Balance>잔액</S.Balance>
        </S.TransactionSubTitle>
        <S.TransactionLogsContainer>
          {accoutLogPagenation?.map((log: any) => {
            return <LogDetailContainer log={log} key={log.accountLogId} />;
          })}
        </S.TransactionLogsContainer>
      </>
    </TransactionLogLayout>
  );
};

export default AccountLog;
