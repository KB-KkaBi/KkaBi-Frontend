import React, { useCallback, useEffect, useState } from "react";
import { Button, IconButton, Modal, PaperLayout } from "@/@components";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import * as S from "./styles/mypageStyle";
import { calculatePercentage, getTotalMoney } from "./libs/factory";
import { STAR_FRIENDS } from "@/core/starFriends";
import { PieChart } from "react-minimal-pie-chart";

import Treasure1 from "@/assets/icon/miniTreasure1.svg";
import Treasure2 from "@/assets/icon/miniTreasure2.svg";
import Treasure3 from "@/assets/icon/miniTreasure3.svg";
import Treasure4 from "@/assets/icon/miniTreasure4.svg";

const MyPage = () => {
  const navigate = useNavigate();
  /**
   * 원래는 이 페이지 부르기 전 get 요청해서 유저정보 값(닉네임, 캐릭터, 금액들) 가져옴
   */
  const UserDummy = {
    nickname: "승구",
    character: "루나키키",
    detailMoney: {
      totalDeposit: 1000, //예금
      totalSavings: 7000, //적금
      totalTreasure: 7600, // 전체 보물 자산 구한 값
    },

    detailTreasure: {
      treasure1: 103,
      treasure2: 90,
      treasure3: 40,
      treasure4: 12,
    },
  };

  const [profileEditopen, setProfileEditOpen] = React.useState(false);
  const handleProfileEditModalOpen = () => setProfileEditOpen(true);
  const handleProfileEditModalClose = () => setProfileEditOpen(false);

  /**
   * 로그아웃관련
   */
  const [logoutModalOpen, setLogoutModalOpen] = React.useState(false);
  const handleLogoutModalOpen = () => setLogoutModalOpen(true);
  const handleLogoutModalClose = () => setLogoutModalOpen(false);

  //logout 할때 할 함수
  const handleLoginClicked = useCallback(() => {
    /**
     * 로그아웃 API 요청
     * 결과로 status = 200이 오면 세션스토리지에 회원정보 지우고 랜딩페이지로 가기
     * */
    console.log("로그아웃 버튼눌림");
  }, []);

  const [totalMoney, setTotalMoney] = useState(getTotalMoney(UserDummy));

  /**
   * pie chart 데이터
   */
  const [percentDeposit, setPercentDeposit] = useState(
    calculatePercentage(UserDummy.detailMoney.totalDeposit, totalMoney) || 0,
  );
  const [percentSavings, setPercentSavings] = useState(
    calculatePercentage(UserDummy.detailMoney.totalSavings, totalMoney) || 0,
  );
  const [percentTreasure, setPercentTreasure] = useState(
    calculatePercentage(UserDummy.detailMoney.totalTreasure, totalMoney) || 0,
  );

  const [pieData, setPieData] = useState([
    { title: "예금", value: percentDeposit, color: "#f4b7b5" },
    { title: "적금", value: percentSavings, color: "#98caff" },
    { title: "보물", value: percentTreasure, color: "#f8bd57" },
  ]);
  function selectRank() {
    if (totalMoney < 10000) {
      return <S.Ranking6Icon />;
    } else if (totalMoney >= 10000 && totalMoney < 15000) {
      return <S.Ranking6Icon />;
    } else if (totalMoney >= 15000 && totalMoney < 20000) {
      return <S.Ranking5Icon />;
    } else if (totalMoney >= 20000 && totalMoney < 25000) {
      return <S.Ranking4Icon />;
    } else if (totalMoney >= 25000 && totalMoney < 30000) {
      return <S.Ranking3Icon />;
    } else if (totalMoney >= 30000 && totalMoney < 40000) {
      return <S.Ranking2Icon />;
    } else {
      return <S.Ranking1Icon />;
    }
  }
  function selectCharacter(characterName: string) {
    switch (characterName) {
      case STAR_FRIENDS.AGO:
        return <S.BigProfileAgoImg />;
      case STAR_FRIENDS.BB:
        return <S.BigProfileBBImg />;
      case STAR_FRIENDS.KIKI:
        return <S.BigProfileKiKiImg />;
      case STAR_FRIENDS.KOLLY:
        return <S.BigProfileKollyImg />;
      case STAR_FRIENDS.LAMU:
        return <S.BigProfileLamuImg />;
      default:
        return <S.BigProfileAgoImg />;
    }
  }
  useEffect(() => {
    // console.log(percentDeposit);
    // console.log(percentSavings);
    // console.log(percentTreasure);

    //User정보 가지고 오자마자 바로 함수 발동해서 값 넣기
    setTotalMoney(getTotalMoney(UserDummy));

    setPercentDeposit(calculatePercentage(UserDummy.detailMoney.totalDeposit, totalMoney));
    setPercentSavings(calculatePercentage(UserDummy.detailMoney.totalSavings, totalMoney));
    setPercentTreasure(calculatePercentage(UserDummy.detailMoney.totalTreasure, totalMoney));

    setPieData([
      { title: "예금", value: percentDeposit, color: "#f4b7b5" },
      { title: "적금", value: percentSavings, color: "#98caff" },
      { title: "보물", value: percentTreasure, color: "#f8bd57" },
    ]);
  }, [percentDeposit, percentSavings, percentTreasure]);

  return (
    <>
      <PaperLayout
        handleClick={() => {
          navigate(-1);
        }}>
        <S.MyPageRootContainer>
          <S.UserNickNameContainer>
            <p className="text">{UserDummy.nickname}</p>
            <S.RankListWrapper
              onClick={() => {
                navigate("/mypage/ranklist");
              }}>
              {selectRank()}
            </S.RankListWrapper>
          </S.UserNickNameContainer>
          <S.UserInfoContainer>
            <S.UserProfileContainer>{selectCharacter(UserDummy.character)}</S.UserProfileContainer>

            <S.UserMoneyInfoContainer>
              <S.UserMoneyTotalWrapper>
                <p className="text"> 총 자산 </p>
                <div className="money">
                  <S.Won>₩</S.Won>
                  <p>{totalMoney.toLocaleString()} </p>
                </div>
              </S.UserMoneyTotalWrapper>
              <S.UserTreasureTotalWrapper>
                <S.Treasure>
                  <img src={Treasure1} alt="보물1" />
                  <p>{UserDummy.detailTreasure.treasure1}개</p>
                </S.Treasure>
                <S.Treasure>
                  <img src={Treasure2} alt="보물2" />
                  <p>{UserDummy.detailTreasure.treasure2}개</p>
                </S.Treasure>
                <S.Treasure>
                  <img src={Treasure3} alt="보물3" />
                  <p>{UserDummy.detailTreasure.treasure3}개</p>
                </S.Treasure>
                <S.Treasure>
                  <img src={Treasure4} alt="보물4" />
                  <p>{UserDummy.detailTreasure.treasure4}개</p>
                </S.Treasure>
              </S.UserTreasureTotalWrapper>
            </S.UserMoneyInfoContainer>
            <S.PieChartContainer>
              <PieChart
                data={pieData}
                //label={({ dataEntry }) => dataEntry.value + `%\n\n` + dataEntry.title}
                label={({ dataEntry }) => {
                  const fullLines = dataEntry.title + " " + dataEntry.value + "%";
                  return fullLines;
                }}
                labelPosition={50}
                animate
                labelStyle={{
                  fontSize: "0.8rem",
                }}
              />
            </S.PieChartContainer>
          </S.UserInfoContainer>
          <S.ButtonContainer>
            <Button className="btn" onClick={handleProfileEditModalOpen}>
              내 정보 수정
            </Button>
            <Modal open={profileEditopen} onClose={handleProfileEditModalClose}>
              <S.ModalWrapper>
                <Button
                  className="btn"
                  onClick={() => {
                    navigate("/mypage/editnickname");
                  }}>
                  닉네임 수정
                </Button>
                <Button
                  className="btn"
                  onClick={() => {
                    navigate("/mypage/editpassword");
                  }}>
                  비밀번호 수정
                </Button>
              </S.ModalWrapper>
            </Modal>
            <Button
              className="btn"
              onClick={() => {
                navigate("/mypage/quiznote");
              }}>
              퀴즈 오답노트
            </Button>
            <Button className="btn" onClick={handleLogoutModalOpen}>
              로그아웃
            </Button>
            <Modal open={logoutModalOpen} onClose={handleLogoutModalClose}>
              <S.LogoutModalWrapper>
                <p className="text">로그아웃하시겠습니까?</p>

                <S.BtnWrapper>
                  <Button className="cancel-btn" onClick={handleLogoutModalClose}>
                    취소
                  </Button>
                  <Button className="logout-btn" onClick={handleLoginClicked}>
                    확인
                  </Button>
                </S.BtnWrapper>
              </S.LogoutModalWrapper>
            </Modal>
          </S.ButtonContainer>
        </S.MyPageRootContainer>
      </PaperLayout>
    </>
  );
};

export default MyPage;
