import { HomeKkaBiBankIc, HomeTreasureIc } from "@/assets";
import { styled } from "styled-components";
import Background from "../assets/image/homeBackground.png";
import MyInfo from "../@components/Home/MyInfo";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function moveToTreasure() {
    navigate("/invest");
  }

  function moveToBank() {
    navigate("/bank");
  }

  function moveToMyPage() {
    navigate("/mypage");
  }

  return (
    <>
      <MyInfo characterName="루나키키" nickName="지수수" totalMoney={11000} onClick={moveToMyPage} />
      <HomeTreasureIcon onClick={moveToTreasure} />

      <HomeKkaBiBankIcon onClick={moveToBank} />

      <BackgroundImg src={Background} alt="배경화면" />
    </>
  );
};

export default Home;

const BackgroundImg = styled.img`
  position: absolute;
  z-index: -1;

  width: 100%;
  height: 100vh;
`;

const HomeTreasureIcon = styled(HomeTreasureIc)`
  position: absolute;

  margin: 22% 0 0 3%;
  /* margin: 45.6rem 0 0 4rem; */
`;

const HomeKkaBiBankIcon = styled(HomeKkaBiBankIc)`
  position: absolute;

  margin: 14% 0 0 68%;
  /* margin-top: 36.5rem; */
  /* right: 9.6rem; */
`;
