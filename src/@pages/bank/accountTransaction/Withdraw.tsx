import { Button } from "@/@components";
import { Modal, PaperLayout, TextField } from "@/@components/common/";
import { useState } from "react";
import { useNavigate } from "react-router";
import * as S from "./style";
import { useRecoilValue } from "recoil";
import { useMutation } from "react-query";
import { postAccountLog } from "@/api/account";
import { bankLog } from "@/recoil/bank";

const Withdraw = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [reason, setReason] = useState("");
  const [amount, setAmount] = useState<number>();
  const bankLogs=useRecoilValue(bankLog);

  const {mutate : createAccountLog} = useMutation(postAccountLog,{
    onSuccess:() => {
      setOpen(true);
    },
    onError: (error) =>{
      setError(true);
    }
  });

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleReasonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReason(e.target.value);
  };

  const handleOpen = () => {
    createAccountLog({accountId: bankLogs.accountId, accountLogMoney: bankLogs.accountLogMoney - amount, transactionAmount: -amount, transactionReason: reason, transactionType: "출금"})
  }
  const handleClose = () => {
    setOpen(false);
    navigate("../", { replace: true });
  };

  const errorClose = () => {
    setError(false);
    setAmount("");
    setReason("");
  }

  return (
    <PaperLayout handleClick={() => navigate("../")}>
      <S.TransactionContent>
        <S.Guide>얼마를 출금할까요?</S.Guide>
        <TextField
          type="number"
          onChange={handleAmountChange}
          value={amount}
          InputProps={{
            endAdornment: <S.Won color={!!amount ? "#000" : "#aaaaaa"}>\</S.Won>,
          }}></TextField>
        <S.Guide>출금 사유를 작성해주세요</S.Guide>
        <TextField 
          placeholder="ex. 사탕 사먹기"
          onChange={handleReasonChange}
          value={reason}></TextField>
        <Button onClick={handleOpen}>확인</Button>
      </S.TransactionContent>
      <Modal open={open}>
        <>
          <S.Guide>출금되었습니다</S.Guide>
          <Button onClick={handleClose}>확인</Button>
        </>
      </Modal>
      <Modal open={error}>
        <>
          <S.Guide>잔액이 부족합니다</S.Guide>
          <Button onClick={errorClose}>확인</Button>
        </>
      </Modal>
    </PaperLayout>
  );
};

export default Withdraw;
