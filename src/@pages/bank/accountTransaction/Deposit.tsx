import { Button } from "@/@components";
import { Modal, PaperLayout, TextField } from "@/@components/common/";
import { useState } from "react";
import { useNavigate } from "react-router";
import * as S from "./style";

const Deposit = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState("");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    navigate("../", { replace: true });
  };

  return (
    <PaperLayout handleClick={() => navigate("../")}>
      <S.TransactionContent>
        <S.Guide>얼마를 예금할까요?</S.Guide>
        <TextField
          type="number"
          onChange={handleAmountChange}
          InputProps={{
            endAdornment: <S.Won color={!!amount ? "#000" : "#aaaaaa"}>\</S.Won>,
          }}></TextField>
        <S.Guide>예금 사유를 작성해주세요</S.Guide>
        <TextField placeholder="ex. 용돈"></TextField>
        <Button onClick={handleOpen}>확인</Button>
      </S.TransactionContent>
      <Modal open={open}>
        <>
          <S.Guide>예금되었습니다</S.Guide>
          <Button onClick={handleClose}>확인</Button>
        </>
      </Modal>
    </PaperLayout>
  );
};

export default Deposit;