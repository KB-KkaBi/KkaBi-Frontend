import { Button } from "@/@components";
import { Modal, PaperLayout, TextField } from "@/@components/common/";
import { getMyOneAccount, postAccountLog } from "@/api/account";
import { bankLog } from "@/recoil/bank";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import * as S from "./style";

const Deposit = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const [reason, setReason] = useState("");
  const [amount, setAmount] = useState("");
  const bankLogs = useRecoilValue(bankLog);

  const { mutate: createAccountLog } = useMutation(postAccountLog, {
    onSuccess: () => {
      setOpen(true);
    },
    onError: (error) => {
      console.log(error);
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
      accountLogMoney: money + Number(amount),
      transactionAmount: Number(amount),
      transactionReason: reason,
      transactionType: "입금",
    });
  };

  const handleClose = () => {
    setOpen(false);
    navigate("../", { replace: true });
  };

  return (
    <PaperLayout handleClick={() => navigate("../")}>
      <S.TransactionContent>
        <S.Guide>얼마를 입금할까요?</S.Guide>
        <TextField
          type="number"
          onChange={handleAmountChange}
          value={amount}
          InputProps={{
            endAdornment: <S.Won color={!!amount ? "#000" : "#aaaaaa"}>\</S.Won>,
          }}></TextField>
        <S.Guide>입금 사유를 작성해주세요</S.Guide>
        <TextField value={reason} placeholder="ex. 용돈" onChange={handleReasonChange}></TextField>
        <Button onClick={handleOpen} disabled={!amount || !reason}>
          확인
        </Button>
      </S.TransactionContent>
      <Modal open={open}>
        <>
          <S.Guide>입금되었습니다</S.Guide>
          <Button onClick={handleClose}>확인</Button>
        </>
      </Modal>
    </PaperLayout>
  );
};

export default Deposit;
