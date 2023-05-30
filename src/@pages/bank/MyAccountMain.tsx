import { Button } from "@/@components";
import { BankLayout } from "@/@components/common/";
import { getMyOneAccount } from "@/api/account";
import { bankLog, clickedId } from "@/recoil/bank";
import { useQuery } from "react-query";
import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import * as S from "./style";

const MyAccountMain = () => {
  // const { state } = useLocation();
  // console.debug(state);
  const id = useRecoilValue(clickedId);
  // const accountInfoId=

  const navigate = useNavigate();
  const bankLogs = useRecoilValue(bankLog);

  const { data: money } = useQuery(["accountLogMoney"], () => getMyOneAccount(bankLogs?.accountId));
  console.debug(money);

  function checkIsDeposit() {
    return id === 3 || id === 4;
  }

  return (
    <BankLayout handleClick={() => navigate("../select-my-account")}>
      <S.TextContainer>
        <S.Won>\ {money?.toLocaleString()}</S.Won>
        <S.Guide>어떤 업무를 진행하시겠어요?</S.Guide>
      </S.TextContainer>
      <S.BottomButtonContainer>
        <Button onClick={() => navigate("./deposit")}>입금</Button>
        {checkIsDeposit() && <Button onClick={() => navigate("./withdraw")}>출금</Button>}
        <Button onClick={() => navigate("./account-log")}>내역확인</Button>
      </S.BottomButtonContainer>
    </BankLayout>
  );
};

export default MyAccountMain;
