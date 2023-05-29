import Character from "@/@components/Home/Character/Character";
import { getUserInfo } from "@/api/user";
import { HomeBankActiveIc, HomeBankIc, HomeTreasureActiveIc, MainPageTreasureIc } from "@/assets";
import { UserInfoDataTypes } from "@/core/userInfoData";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import MyInfo from "../@components/Home/MyInfo/MyInfo";
import Background from "../assets/image/homeBackground.png";

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

  // const [detailMoney, setDetailMoney] = useState<any>([]);
  const [totalMoney, setTotalMoney] = useState(0);
  const { data: userInfoData } = useQuery<UserInfoDataTypes>(["userHomeInfo"], getUserInfo, {
    onSuccess: (response) => {
      // setDetailMoney(response.detailMoney);
      setTotalMoney(
        response.detailMoney.totalDeposit + response.detailMoney.totalSavings + response.detailMoney.totalTreasure,
      );
    },
  });
  const [bankHover, setBankHover] = useState(false);
  const [treasureHover, setTreasureHover] = useState(false);

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
          <Tooltip
            title="보물섬"
            placement="bottom"
            componentsProps={{
              tooltip: {
                sx: {
                  m: 1,
                  bgcolor: "transparent",
                  fontFamily: "KOTRAHOPE",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "4.6rem",
                  lineHeight: "5.4rem",
                  color: "black",
                },
              },
            }}>
            <Icon
              onClick={moveToTreasure}
              onMouseEnter={() => setTreasureHover(true)}
              onMouseOut={() => setTreasureHover(false)}>
              {treasureHover ? <HomeTreasureActiveIc /> : <MainPageTreasureIc onClick={moveToTreasure} />}
            </Icon>
          </Tooltip>
          <Character characterName={userInfoData?.character || ""} />
          <Tooltip
            title="은행"
            placement="bottom"
            componentsProps={{
              tooltip: {
                sx: {
                  m: 1,
                  bgcolor: "transparent",
                  fontFamily: "KOTRAHOPE",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "4.6rem",
                  lineHeight: "5.4rem",
                  color: "black",
                },
              },
            }}>
            <Icon onClick={moveToBank} onMouseEnter={() => setBankHover(true)} onMouseLeave={() => setBankHover(false)}>
              {bankHover ? <HomeBankActiveIc /> : <HomeBankIc />}
            </Icon>
          </Tooltip>
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

  width: 165rem;
`;

const Icon = styled.section`
  cursor: pointer;
  margin-bottom: 0rem;
`;
