import { HomeKkaBiBankIc, HomeTreasureIc } from "@/assets";
import { styled } from "styled-components";
import Background from "../assets/image/homeBackground.png";
import MyInfo from "../@components/Home/MyInfo/MyInfo";
import { useNavigate } from "react-router-dom";
import Character from "@/@components/Home/Character/Character";
import { useQuery } from "react-query";
import { getUserInfo } from "@/api/user";
import { UserInfoDataTypes } from "@/core/userInfoData";
import { useState } from "react";
import { getTotalMoney } from "./MyPage/libs/factory";

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

  const { data: userInfoData } = useQuery<UserInfoDataTypes>(["userHomeInfo"], getUserInfo);

  const totalMoney =
    userInfoData?.detailMoney.totalDeposit! +
    userInfoData?.detailMoney.totalSavings! +
    userInfoData?.detailMoney.totalTreasure!;

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
          <HomeTreasureIc onClick={moveToTreasure} />
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
