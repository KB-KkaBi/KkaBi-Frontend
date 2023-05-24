import { Button } from "@/@components";
import LandingLayout from "@/@components/Landing/LandingLayout";
import { LandingLogoIc } from "@/assets";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Landing = () => {
  let navigate = useNavigate();

  return (
    <LandingLayout>
      <LandingWrapper>
        <LandingLogoIcon />
        <ButtonContainer>
          <Button onClick={() => navigate("/register")}>회원가입</Button>
          <Button onClick={() => navigate("/login")}>로그인</Button>
        </ButtonContainer>
      </LandingWrapper>
    </LandingLayout>
  );
};

export default Landing;

const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LandingLogoIcon = styled(LandingLogoIc)`
  width: 150rem;
  margin-bottom: 6rem;
  margin-right: 5rem;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 86rem;
  margin-left: 2rem;
  position: absolute;
  bottom: 10rem;
`;
