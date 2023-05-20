import React, { useEffect, useState } from "react";
import { Button, Modal, PaperLayout } from "@/@components";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import * as S from "./styles/mypageStyle";
import { getTotalMoney } from "./libs/factory";
import { log } from "console";

const MyPage = () => {
  const navigate = useNavigate();
  /**
   * 원래는 이 페이지 부르기 전 get 요청해서 유저정보 값(닉네임, 캐릭터, 금액들) 가져옴
   */
  const UserDummy = {
    nickname: "지수수",
    character: "루나키키",
    detailMoney: {
      totalDeposit: 1000,
      totalSavings: 8000,
      totalTreasure: 7600, // 전체 보물 자산 구한 값
    },

    detailTreasure: {
      treasure1: 103,
      treasure2: 90,
      treasure3: 40,
      treasure4: 12,
    },
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function selectRank() {
    const totalMoney = getTotalMoney(UserDummy);
    console.log(totalMoney);

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
  useEffect(() => {
    console.log(UserDummy.nickname);
  }, []);

  return (
    <>
      <PaperLayout
        handleClick={() => {
          navigate(-1);
        }}>
        <S.MyPageRootWrapper>
          <S.UserNickNameWrapper>
            <p className="text">{UserDummy.nickname}</p>
            {selectRank()}
          </S.UserNickNameWrapper>
        </S.MyPageRootWrapper>
      </PaperLayout>
    </>
  );
};

export default MyPage;
