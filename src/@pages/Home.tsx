import { MainPageKkaBiBankIc, MainPageTreasureIc } from "@/assets";
import { styled } from "styled-components";
import Background from "../assets/image/mainPageBackground.png";

const Home = () => {
  return (
    <>
      <MainPageTreasureIcon />
      <MainPageKkaBiBankIcon />

      <BackgroundImg src={Background} alt="배경화면" />
    </>
  );
};

export default Home;

const BackgroundImg = styled.img`
  position: absolute;
  z-index: -1;
`;

const MainPageTreasureIcon = styled(MainPageTreasureIc)`
  position: absolute;
  margin: 45.6rem 0 0 4rem;
`;

const MainPageKkaBiBankIcon = styled(MainPageKkaBiBankIc)`
  position: absolute;
  margin-top: 36.5rem;
  right: 9.6rem;
`;
