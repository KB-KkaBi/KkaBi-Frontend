import { Button } from "@/@components";
import { BankLayout } from "@/@components/common/";
import { useNavigate } from "react-router";
import * as S from "./style";
import { useRecoilValue } from "recoil";
import { bankLog } from "@/recoil/bank";

const MyAccountMain = () => {
  const navigate = useNavigate();
  const bankLogs=useRecoilValue(bankLog);

  return (
    <BankLayout>
      <S.TextContainer>
        <S.Won>\ {bankLogs?.accountLogMoney}</S.Won>
        <S.Guide>어떤 업무를 진행하시겠어요?</S.Guide>
      </S.TextContainer>
      <S.BottomButtonContainer>
        <Button onClick={() => navigate("./deposit")}>예금</Button>
        <Button onClick={() => navigate("./withdraw")}>출금</Button>
        <Button onClick={() => navigate("./account-log")}>내역확인</Button>
      </S.BottomButtonContainer>
    </BankLayout>
  );
};

export default MyAccountMain;
