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
  const [page, setPage] = useState<number>(0);
  const navigate = useNavigate();
  const accountId = useRecoilValue(bankLog).accountId;
  // const id = useRecoilValue(clickedId);

  const { data: accountName } = useQuery(["accountName"], () => getAccountName(accountId));
  // 전체 불러오기
  const { data: accountLogList } = useQuery(["getTotalAccountLog"], () => getTotalAccountLog(accountId));
  // 페이지네이션
  const { data: accoutLogPagenation } = useQuery(["pagention", page], () => getAccountLogPagenation(accountId, page));

  // console.log(accoutLogPagenation);
  function checkTotalPage() {
    const totalPage = Math.floor(accountLogList?.length / 10);
    if (accountLogList?.length !== 0) {
      return accountLogList?.length % 10 === 0 ? totalPage : totalPage + 1;
    } else {
      return 1;
    }
  }

  function changePage(num: number) {
    if (page + num + 1 !== 0 && page + num !== checkTotalPage()) {
      setPage(page + num);
    }
  }

  return (
    <TransactionLogLayout handleClick={() => navigate("../")}>
      <>
        <S.ArrowWrapper>
          <S.ArrowBox>
            <LeftArrow onClick={() => changePage(-1)} />
            {page + 1} / {checkTotalPage()}
            <RightArrow onClick={() => changePage(1)} />
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
