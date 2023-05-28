import { Button } from "@/@components";
import { Modal, PaperLayout, TextField } from "@/@components/common/";
import { getMyOneAccount, postAccountLog } from "@/api/account";
import { bankLog, clickedId } from "@/recoil/bank";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import * as S from "./style";

const Deposit = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const id = useRecoilValue(clickedId);

  const [reason, setReason] = useState("");
  const [amount, setAmount] = useState("");
  const bankLogs = useRecoilValue(bankLog);
  const [maxMoney, setMaxMoney] = useState(50000);
  const [errorOpen, setErrorOpen] = useState(false);

  const { mutate: createAccountLog } = useMutation(postAccountLog, {
    onSuccess: () => {
      setOpen(true);
    },
    onError: (error) => {
      console.debug(error);
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
    console.log(Number(amount));
    if (Number(amount) <= maxMoney) {
      createAccountLog({
        accountId: bankLogs.accountId,
        accountLogMoney: money + Number(amount),
        transactionAmount: Number(amount),
        transactionReason: reason,
        transactionType: "입금",
      });
    } else {
      setErrorOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    navigate("../", { replace: true });
  };

  const handleErrorClose = () => {
    setErrorOpen(false);
  };

  function checkIsDeposit4() {
    return id === 4;
  }

  useEffect(() => {
    checkIsDeposit4() && setMaxMoney(10000);
  }, []);

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
      <Modal open={errorOpen}>
        <>
          <S.Guide>입금한도는 {maxMoney.toLocaleString()}입니다</S.Guide>
          <Button onClick={handleClose}>확인</Button>
        </>
      </Modal>
    </PaperLayout>
  );
};

export default Deposit;
