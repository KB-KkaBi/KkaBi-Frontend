import { Button } from "@/@components";
import { Modal, PaperLayout, TextField } from "@/@components/common/";
import { getMyOneAccount, postAccountLog } from "@/api/account";
import { bankLog } from "@/recoil/bank";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import * as S from "./style";

const Withdraw = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [reason, setReason] = useState("");
  const [amount, setAmount] = useState("");
  const bankLogs = useRecoilValue(bankLog);
  // const id = useRecoilValue(clickedId);

  const { mutate: createAccountLog } = useMutation(postAccountLog, {
    onSuccess: () => {
      setOpen(true);
    },
    onError: (error) => {
      console.debug(error);
      setError(true);
    },
  });

  const { data: money } = useQuery(["accountLogMoney"], () => getMyOneAccount(bankLogs.accountId));

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value?.replace(/(^0+)/, "");
    setAmount(val);
  };

  const handleReasonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReason(e.target.value);
  };

  const handleOpen = () => {
    createAccountLog({
      accountId: bankLogs.accountId,
      accountLogMoney: money - Number(amount),
      transactionAmount: -Number(amount),
      transactionReason: reason,
      transactionType: "출금",
    });
  };
  const handleClose = () => {
    setOpen(false);
    navigate("../", { replace: true });
  };

  const errorClose = () => {
    setError(false);
    setAmount("");
    setReason("");
  };

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
        <TextField placeholder="ex. 사탕 사먹기" onChange={handleReasonChange} value={reason}></TextField>
        <Button onClick={handleOpen}>확인</Button>
      </S.TransactionContent>
      <Modal open={open}>
        <>
          <S.Guide>출금되었습니다</S.Guide>
          <Button onClick={handleClose} disabled={!amount || !reason}>
            확인
          </Button>
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
