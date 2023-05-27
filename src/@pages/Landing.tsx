import { Button } from "@/@components";
import LandingLayout from "@/@components/Landing/LandingLayout";
import { LandingLogoIc } from "@/assets";
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import landingPlay from "@/assets/image/landingBgmPlay.png";
import landingStop from "@/assets/image/landingBgmStop.png";
import developer from "@/assets/image/developer.png";
import guide from "@/assets/image/guide.png";

import landingMusic from "@/assets/music/landingmypage2.mp3";
import { BtnWrapper } from "./MyPage/styles/mypageStyle";

const Landing = () => {
  let navigate = useNavigate();
  const audioRef = useRef<any>(null);
  const [play, setPlay] = useState<boolean>(false);

  const playClick = () => {
    audioRef.current.play();
  };

  const stopClick = () => {
    audioRef.current.pause();
  };
  return (
    <LandingLayout>
      <ButtonController>
        <ButtonWrapper onClick={() => {}}>
          <img src={guide} alt="guide" />
        </ButtonWrapper>
        <ButtonWrapper onClick={() => {}}>
          <img src={developer} alt="developer" />
        </ButtonWrapper>
        <ButtonWrapper onClick={stopClick}>
          <img src={landingStop} alt="landingStop" />
        </ButtonWrapper>
        <ButtonWrapper onClick={playClick}>
          <img src={landingPlay} alt="landingPlay" />
        </ButtonWrapper>
      </ButtonController>
      <LandingWrapper>
        <audio src={landingMusic} ref={audioRef} autoPlay />
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

const ButtonController = styled.div`
  position: absolute;
  left: 140rem;
  top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;
`;
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

const ButtonWrapper = styled.div`
  cursor: pointer;
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
