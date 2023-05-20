import { Button } from "@/@components";
import { PaperLayout } from "@/@components/common/";
import { useNavigate } from "react-router";

const Deposit = () => {
  const navigate = useNavigate();

  return (
    <PaperLayout handleClick={() => navigate(-1)}>
      <h1>Deposit Page</h1>
      <Button onClick={() => console.debug("예금 확인")}>확인</Button>
    </PaperLayout>
  );
};

export default Deposit;
