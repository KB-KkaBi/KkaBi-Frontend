import { Button, PaperLayout } from "@/@components";
import LandingLayout from "@/@components/Landing/LandingLayout";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Landing = () => {
  let navigate = useNavigate();

  return (
    <LandingLayout>
      <ButtonContainer>
        <Button onClick={() => navigate("/register")}>회원가입</Button>
        <Button onClick={() => navigate("/login")}>로그인</Button>
      </ButtonContainer>
    </LandingLayout>
  );
};

export default Landing;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 86rem;
  margin-bottom: 12.7rem;
`;
