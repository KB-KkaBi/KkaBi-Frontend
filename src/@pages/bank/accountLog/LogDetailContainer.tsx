import { AccountLogData } from "./AccountLog";
import * as S from "./style";

type LogDetailProps = {
  log: AccountLogData;
};

function LogDetailContainer(props: LogDetailProps) {
  const { log } = props;

  return (
    <S.LogDetail>
      <S.TransactionDate>{log.date}</S.TransactionDate>
      <S.WithdrawAmount>
        {log.withdraw && (
          <>
            <S.Won>\&nbsp;</S.Won>
            {log.withdraw}
          </>
        )}
      </S.WithdrawAmount>
      <S.DepositAmount>
        {log.deposit && (
          <>
            <S.Won>\&nbsp;</S.Won>
            {log.deposit}
          </>
        )}
      </S.DepositAmount>
      <S.TransactionDetail>{log.detail}</S.TransactionDetail>
      <S.Balance>
        {log.balance && (
          <>
            <S.Won>\&nbsp;</S.Won>
            {log.balance}
          </>
        )}
      </S.Balance>
    </S.LogDetail>
  );
}

export default LogDetailContainer;
