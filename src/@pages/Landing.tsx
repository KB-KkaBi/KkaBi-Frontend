import { Button, GuideModal } from "@/@components";
import LandingLayout from "@/@components/Landing/LandingLayout";
import { LandingLogoIc } from "@/assets";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import developer from "@/assets/image/developer.png";
import developerImage from "@/assets/image/developer_guide.png";
import guide from "@/assets/image/guide.png";
import guideImage1 from "@/assets/image/home_guide_1.png";
import guideImage10 from "@/assets/image/home_guide_10.png";
import guideImage11 from "@/assets/image/home_guide_11.png";
import guideImage2 from "@/assets/image/home_guide_2.png";
import guideImage3 from "@/assets/image/home_guide_3.png";
import guideImage4 from "@/assets/image/home_guide_4.png";
import guideImage5 from "@/assets/image/home_guide_5.png";
import guideImage6 from "@/assets/image/home_guide_6.png";
import guideImage7 from "@/assets/image/home_guide_7.png";
import guideImage8 from "@/assets/image/home_guide_8.png";
import guideImage9 from "@/assets/image/home_guide_9.png";
import landingPlay from "@/assets/image/landingBgmPlay.png";
import landingStop from "@/assets/image/landingBgmStop.png";
import landingMusic from "@/assets/music/landingmypage2.mp3";

const Landing = () => {
  let navigate = useNavigate();
  const audioRef = useRef<any>(null);
  const [play, setPlay] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [guideModalContent, setGuideModalContent] = useState<string>("");

  const getModalContent = () => {
    switch (guideModalContent) {
      case "developer":
        return developerImage;
      case "guide1":
        return guideImage1;
      case "guide2":
        return guideImage2;
      case "guide3":
        return guideImage3;
      case "guide4":
        return guideImage4;
      case "guide5":
        return guideImage5;
      case "guide6":
        return guideImage6;
      case "guide7":
        return guideImage7;
      case "guide8":
        return guideImage8;
      case "guide9":
        return guideImage9;
      case "guide10":
        return guideImage10;
      case "guide11":
        return guideImage11;
    }
  };

  const playClick = () => {
    audioRef.current.play();
  };

  const stopClick = () => {
    audioRef.current.pause();
  };

  const openModal = (modalType: string) => {
    setGuideModalContent(modalType);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleGuideModal = () => {
    if (guideModalContent.startsWith("guide")) {
      console.debug(Number(guideModalContent.substring(5, guideModalContent.length)));
      if (Number(guideModalContent.substring(5, guideModalContent.length)) === 11) closeModal();
      setGuideModalContent(
        guideModalContent.substring(0, 5) + (Number(guideModalContent.substring(5, guideModalContent.length)) + 1),
      );
    } else {
      closeModal();
    }
  };

  return (
    <LandingLayout>
      <ButtonController>
        <ButtonWrapper onClick={() => openModal("guide1")}>
          <img src={guide} alt="guide" />
        </ButtonWrapper>
        <ButtonWrapper onClick={() => openModal("developer")}>
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
      <GuideModal open={open} onClose={closeModal}>
        <div onClick={handleGuideModal}>
          <img src={getModalContent()} />
        </div>
      </GuideModal>
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
