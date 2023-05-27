import Character from "@/@components/Home/Character/Character";
import { getUserInfo } from "@/api/user";
import { HomeKkaBiBankIc, MainPageTreasureIc } from "@/assets";
import { UserInfoDataTypes } from "@/core/userInfoData";
import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import MyInfo from "../@components/Home/MyInfo/MyInfo";
import Background from "../assets/image/homeBackground.png";

type DetailMoney = {
  totalDeposit?: number;
  totalSavings?: number;
  totalTreasure?: number;
};
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

  const [detailMoney, setDetailMoney] = useState<any>([]);
  const [totalMoney, setTotalMoney] = useState(0);
  const { data: userInfoData } = useQuery<UserInfoDataTypes>(["userHomeInfo"], getUserInfo, {
    onSuccess: (response) => {
      setDetailMoney(response.detailMoney);
      setTotalMoney(
        response.detailMoney.totalDeposit + response.detailMoney.totalSavings + response.detailMoney.totalTreasure,
      );
    },
  });

  return (
    <>
      <MyInfo
        characterName={userInfoData?.character || ""}
        nickName={userInfoData?.nickname || ""}
        totalMoney={totalMoney}
        onClick={moveToMyPage}
      />
      <ImgContainer>
        <ImgWrapper>
          <MainPageTreasureIc onClick={moveToTreasure} />
          <Character characterName={userInfoData?.character || ""} />
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

  width: 100%;
  height: 100%;
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
  bottom: 15rem;

  width: 140rem;
`;
