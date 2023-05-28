import Character from "@/@components/Home/Character/Character";
import { getUserInfo } from "@/api/user";
import { HomeBankActiveIc, HomeBankIc, HomeTreasureActiveIc, MainPageTreasureIc } from "@/assets";
import { UserInfoDataTypes } from "@/core/userInfoData";
import { clickedId } from "@/recoil/bank";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import MyInfo from "../@components/Home/MyInfo/MyInfo";
import Background from "../assets/image/homeBackground.png";

const Home = () => {
  const navigate = useNavigate();
  const [id, setId] = useRecoilState(clickedId);

  useEffect(() => {
    setId(0);
    console.debug(id);
  }, []);

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
          <Icon
            onClick={moveToTreasure}
            onMouseEnter={() => setTreasureHover(true)}
            onMouseOut={() => setTreasureHover(false)}>
            {treasureHover ? <HomeTreasureActiveIc /> : <MainPageTreasureIc onClick={moveToTreasure} />}
          </Icon>
          <Character characterName={userInfoData?.character || ""} />
          <Icon onClick={moveToBank} onMouseEnter={() => setBankHover(true)} onMouseLeave={() => setBankHover(false)}>
            {bankHover ? <HomeBankActiveIc /> : <HomeBankIc />}
          </Icon>
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
