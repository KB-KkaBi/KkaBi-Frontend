import { AccountLogData } from "./AccountLog";
import * as S from "./style";

interface LogDetailProps {
  log: AccountLogData;
  // accountLogId: number;
  // accountLogDate: string;
  // accountLogMoney: number;
  // transactionType: string;
  // transactionReason: string;
  // transactionAmount: string;
}

function LogDetailContainer(props: any) {
  const { log } = props;

  console.log(log);
  function isDeposit(transactionType: string) {
    return transactionType === "입금";
  }

  return (
    <S.LogDetail>
      <S.TransactionDate>{log.accountLogDate}</S.TransactionDate>
      <S.WithdrawAmount>
        {!isDeposit(log.transactionType) && (
          <>
            <S.Won>\&nbsp;</S.Won>
            {log.transactionAmount}
          </>
        )}
      </S.WithdrawAmount>
      <S.DepositAmount>
        {isDeposit(log.transactionType) && (
          <>
            <S.Won>\&nbsp;</S.Won>
            {Math.abs(log.transactionAmount)}
          </>
        )}
      </S.DepositAmount>
      <S.TransactionDetail>{log.transactionReason}</S.TransactionDetail>
      <S.Balance>
        {/* {log.balance && ( */}
        <>
          <S.Won>\&nbsp;</S.Won>
          {log.accountLogMoney}
        </>
        {/* )} */}
      </S.Balance>
    </S.LogDetail>
  );
}

export default LogDetailContainer;
