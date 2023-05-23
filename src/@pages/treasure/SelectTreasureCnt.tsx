import React from "react";
import { useLocation } from "react-router-dom";
import * as S from "./style";
import { PaperLayout } from "@/@components";
import { level } from "@/core/treasureLevel";

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
      <S.SelectedTitle>{treasureName}</S.SelectedTitle>
      <S.TreasureWrapper isClicked={true}>{checkTreasure()}</S.TreasureWrapper>
      <S.TreasureContentWrapper>
        <p>1개 {price}원</p>
        <p>수익율 {interestRate * 100}%</p>
        <p>난이도 {level(treasureId)} </p>
      </S.TreasureContentWrapper>
    </PaperLayout>
  );
};

export default SelectTreasureCnt;
