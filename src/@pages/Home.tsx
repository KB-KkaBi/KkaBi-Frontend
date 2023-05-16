import { MainPageKkaBiBackIc, MainPageTreasureIc } from "@/assets";
import { styled } from "styled-components";
import Background from "../assets/image/mainPageBackground.png";

const Home = () => {
  return (
    <>
      <MainPageTreasureIc />
      <MainPageKkaBiBackIc />

      <BackgroundImg src={Background} alt="배경화면" />
    </>
  );
};

export default Home;

const BackgroundImg = styled.img`
  position: absolute;
  z-index: -1;
`;
