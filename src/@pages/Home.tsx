import { HomeKkaBiBankIc, HomeTreasureIc } from "@/assets";
import { styled } from "styled-components";
import Background from "../assets/image/homeBackground.png";
import MyInfo from "../@components/Home/MyInfo/MyInfo";
import { useNavigate } from "react-router-dom";
import Character from "@/@components/Home/Character/Character";

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
      <ImgContainer>
        <ImgWrapper>
          <HomeTreasureIc onClick={moveToTreasure} />
          <Character characterName="루나키키" />
          <HomeKkaBiBankIc onClick={moveToBank} />
        </ImgWrapper>
      </ImgContainer>
      <BackgroundImg src={Background} alt="배경화면" />
    </>
  );
};

export default Home;

const BackgroundImg = styled.img`
  position: absolute;
  z-index: -1;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ImgWrapper = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;

  position: absolute;

  width: 140rem;
`;
