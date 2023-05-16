import { Button, PaperLayout } from "@/@components";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  let navigate = useNavigate();

  return (
    <PaperLayout handleClick={() => navigate(-1)}>
      <h1>Landing Page</h1>
      <Button onClick={() => navigate("/register")}>회원가입</Button>
      <Button onClick={() => navigate("/login")}>로그인</Button>
    </PaperLayout>
  );
};

export default Landing;
