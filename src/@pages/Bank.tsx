import { Button } from "@/@components";
import { BankLayout } from "@/@components/common/";
import { useNavigate } from "react-router";

const Bank = () => {
  const navigate = useNavigate();

  return (
    <BankLayout>
      <h1>Bank Page</h1>
      <Button onClick={() => navigate("./deposit")}>예금</Button>
      <Button onClick={() => navigate("./withdraw")}>출금</Button>
      <Button onClick={() => navigate("./account-log")}>내역확인</Button>
    </BankLayout>
  );
};

export default Bank;
