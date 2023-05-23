import React from "react";
import { useLocation } from "react-router-dom";
import * as S from "./style";
import { Button, PaperLayout } from "@/@components";
import { level } from "@/core/treasureLevel";
import Input from "@/@components/common/textField/CommonTextField";

const SelectTreasureCnt = () => {
  const { state } = useLocation();
  const { treasureId, treasureName, interestRate, price } = state;

  function checkTreasure() {
    switch (treasureId) {
      case 1:
        return <S.RubieIcon />;
      case 2:
        return <S.RingIcon />;
      case 3:
        return <S.CrownIcon />;
      case 4:
        return <S.DiamondIcon />;
      default:
        return;
    }
  }

  return (
    <PaperLayout>
      <S.SelectTreasureCntWrapper>
        <S.SelectedTitle>{treasureName}</S.SelectedTitle>
        <S.FlexBox>
          <S.TreasureWrapper isClicked={true}>{checkTreasure()}</S.TreasureWrapper>
          <S.TreasureContentWrapper>
            <p>1개 {price}원</p>
            <p>수익율 {interestRate * 100}%</p>
            <p>난이도 {level(treasureId)} </p>
          </S.TreasureContentWrapper>
        </S.FlexBox>
        <>
          <S.Title>투자할 보물의 개수를 입력해주세요</S.Title>
          <Input placeholder="계좌 이름을 입력해주세요"></Input>
          <S.FlexBox>
            <Button>확인</Button>
          </S.FlexBox>
        </>
      </S.SelectTreasureCntWrapper>
    </PaperLayout>
  );
};

export default SelectTreasureCnt;
