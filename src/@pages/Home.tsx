import { HomeKkaBiBankIc, HomeTreasureIc } from "@/assets";
import { styled } from "styled-components";
import Background from "../assets/image/homeBackground.png";

const Home = () => {
  return (
    <>
      <HomeTreasureIcon />
      <HomeKkaBiBankIcon />

      <BackgroundImg src={Background} alt="배경화면" />
    </>
  );
};

export default Home;

const BackgroundImg = styled.img`
  position: absolute;
  z-index: -1;
`;

const HomeTreasureIcon = styled(HomeTreasureIc)`
  position: absolute;
  margin: 45.6rem 0 0 4rem;
`;

const HomeKkaBiBankIcon = styled(HomeKkaBiBankIc)`
  position: absolute;
  margin-top: 36.5rem;
  right: 9.6rem;
`;
