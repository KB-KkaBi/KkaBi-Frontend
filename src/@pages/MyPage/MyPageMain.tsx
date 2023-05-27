import { Button, Modal, PaperLayout } from "@/@components";
import { STAR_FRIENDS } from "@/core/starFriends";
import React, { useCallback, useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { useNavigate } from "react-router-dom";
import { calculatePercentage, getTotalMoney } from "./libs/factory";
import * as S from "./styles/mypageStyle";

import Treasure1 from "@/assets/icon/miniTreasure1.svg";
import Treasure2 from "@/assets/icon/miniTreasure2.svg";
import Treasure3 from "@/assets/icon/miniTreasure3.svg";
import Treasure4 from "@/assets/icon/miniTreasure4.svg";
import { useMutation, useQuery } from "react-query";
import { UserInfoDataTypes } from "@/core/userInfoData";
import { getUserInfo } from "@/api/user";
import { userSequence } from "@/recoil/User";
import { useRecoilState } from "recoil";
import { postLogout } from "@/api/logout";

const MyPageMain = () => {
  const navigate = useNavigate();
  const [profileEditopen, setProfileEditOpen] = React.useState(false);
  const handleProfileEditModalOpen = () => setProfileEditOpen(true);
  const handleProfileEditModalClose = () => setProfileEditOpen(false);

  /**
   * 로그아웃관련
   */

  const [logoutModalOpen, setLogoutModalOpen] = React.useState(false);
  const [userSeq, setUserSeq] = useRecoilState(userSequence);
  const handleLogoutModalOpen = () => setLogoutModalOpen(true);
  const handleLogoutModalClose = () => setLogoutModalOpen(false);

  //logout 할때 할 함수
  const handleLogoutClicked = useCallback(() => {
    logout();
    console.log("로그아웃 버튼눌림");
    console.log("userSeq = ", userSeq);
  }, []);

  const { mutate: logout } = useMutation(postLogout, {
    onSuccess: (response) => {
      setUserSeq(-123); // 리코일 userseq값 초기화시키기
      navigate("/landing");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const [pieData, setPieData] = useState<any[]>([]);

  /**
   * 유저 정보가지고 오기
   */
  const [totalMoney, setTotalMoney] = useState<number>(0);
  const [detailMoney, setDetailMoney] = useState<any>([]);
  const [detailTreasure, setDetailTreasure] = useState<any>([]);
  /**
   * pie chart 데이터
   */
  const [percentDeposit, setPercentDeposit] = useState(0);
  const [percentSavings, setPercentSavings] = useState(0);
  const [percentTreasure, setPercentTreasure] = useState(0);

  const { data: userMyData } = useQuery<UserInfoDataTypes>(["userMyInfo"], getUserInfo, {
    onSuccess: (response) => {
      setTotalMoney(getTotalMoney(response));
      setDetailMoney(response.detailMoney);
      setDetailTreasure(response.detailTreasure);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  useEffect(() => {
    setPieData([]);
    if (detailMoney.totalDeposit > 0) {
      setPercentDeposit(calculatePercentage(detailMoney.totalDeposit, totalMoney));
      setPieData(([...data]) => [
        ...data,
        {
          title: "예금",
          value: percentDeposit,
          color: "#f4b7b5",
        },
      ]);
    }
    if (detailMoney.totalSavings > 0) {
      setPercentSavings(calculatePercentage(detailMoney.totalSavings || 0, totalMoney));
      setPieData(([...data]) => [
        ...data,
        {
          title: "적금",
          value: percentSavings,
          color: "#98caff",
        },
      ]);
    }
    if (detailMoney.totalTreasure > 0) {
      setPercentTreasure(calculatePercentage(detailMoney.totalTreasure || 0, totalMoney));
      setPieData(([...data]) => [
        ...data,
        {
          title: "보물",
          value: percentTreasure,
          color: "#f8bd57",
        },
      ]);
    }
  }, [detailMoney, detailTreasure, percentDeposit, percentSavings, percentTreasure]);

  console.log("detailMoney", detailMoney);
  console.log("pieData : ", pieData);

  function selectRank() {
    if (totalMoney < 0) return <></>;
    else if (totalMoney >= 10000 && totalMoney < 15000) {
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
      case STAR_FRIENDS.AGO:
        return <S.BigProfileAgoImg />;
    }
  }

  return (
    <>
      <PaperLayout
        handleClick={() => {
          navigate("/home");
        }}>
        <S.MyPageRootContainer>
          <S.UserNickNameContainer>
            <p className="text">{userMyData?.nickname || ""}</p>
            <S.RankListWrapper
              onClick={() => {
                navigate("/mypage/ranklist");
              }}>
              {selectRank()}
            </S.RankListWrapper>
          </S.UserNickNameContainer>
          <S.UserInfoContainer>
            <S.UserProfileContainer>{selectCharacter(userMyData?.character || "")}</S.UserProfileContainer>
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
                  <p>{userMyData?.detailTreasure.treasure1}개</p>
                </S.Treasure>
                <S.Treasure>
                  <img src={Treasure2} alt="보물2" />
                  <p>{userMyData?.detailTreasure.treasure2}개</p>
                </S.Treasure>
                <S.Treasure>
                  <img src={Treasure3} alt="보물3" />
                  <p>{userMyData?.detailTreasure.treasure3}개</p>
                </S.Treasure>
                <S.Treasure>
                  <img src={Treasure4} alt="보물4" />
                  <p>{userMyData?.detailTreasure.treasure4}개</p>
                </S.Treasure>
              </S.UserTreasureTotalWrapper>
            </S.UserMoneyInfoContainer>
            <S.PieChartContainer>
              <PieChart
                data={pieData}
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
                    navigate("../editnickname");
                  }}>
                  닉네임 수정
                </Button>
                <Button
                  className="btn"
                  onClick={() => {
                    navigate("../editpassword");
                  }}>
                  비밀번호 수정
                </Button>
              </S.ModalWrapper>
            </Modal>
            <Button
              className="btn"
              onClick={() => {
                navigate("../quiznote");
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
                  <Button className="logout-btn" onClick={handleLogoutClicked}>
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

export default MyPageMain;
