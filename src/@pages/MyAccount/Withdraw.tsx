import { Button } from "@/@components";
import { PaperLayout } from "@/@components/common/";
import { useNavigate } from "react-router";

const Withdraw = () => {
  const navigate = useNavigate();

  return (
    <PaperLayout handleClick={() => navigate(-1)}>
      <h1>Withdraw Page</h1>
      <Button onClick={() => console.debug("출금 확인")}>확인</Button>
    </PaperLayout>
  );
};

export default Withdraw;
