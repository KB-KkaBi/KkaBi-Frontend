import { Button, Modal, PaperLayout } from "@/@components";
import { BackArrowIcon } from "@/@components/common/icon/Icons";
import Input from "@/@components/common/textField/CommonTextField";
import { level } from "@/core/treasureLevel";
import { investInfo } from "@/recoil/Invest";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import * as S from "./style";

const SelectTreasureCnt = () => {
  const { state } = useLocation();
  const { treasureId, treasureName, interestRate, price } = state;
  const [cnt, setCnt] = useState(0);
  const [open, setOpen] = useState(false);
  const [isHundred, setIsHundred] = useState(false);
  const navigate = useNavigate();
  const [investData, setInvestData] = useRecoilState(investInfo);

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

  function checkTotalCnt(e: React.ChangeEvent<HTMLInputElement>) {
    setCnt(Number(e.target.value));
  }

  function handleClose() {
    setOpen(false);
  }

  function moveToNextStep() {
    setOpen(true);
    if (cnt % 100 !== 0) {
      setIsHundred(true);
    } else {
      setIsHundred(false);
    }
  }

  function moveToQuiz() {
    setInvestData((prev) => ({ ...prev, count: cnt }));
    navigate("../quiz");
  }
  console.debug(investData);

  return (
    <>
      {isHundred ? (
        <Modal open={open} onClose={handleClose}>
          <S.ModalContent>
            <S.TextWrapper>
              <p>100개 단위로</p>
              <p>입력해주세요</p>
            </S.TextWrapper>
            <Button onClick={handleClose}>확인</Button>
          </S.ModalContent>
        </Modal>
      ) : (
        <Modal open={open} onClose={handleClose}>
          <S.ModalContent>
            <S.TextWrapper>
              <div>
                <p>{treasureName}</p>
                <p>{cnt}개를</p>
              </div>
              <p>투자하시겠습니까?</p>
            </S.TextWrapper>
            <S.ButtonWrapper>
              <Button onClick={handleClose}>취소</Button>
              <Button onClick={moveToQuiz}>확인</Button>
            </S.ButtonWrapper>
          </S.ModalContent>
        </Modal>
      )}
      <PaperLayout>
        <BackButtonWrapper>
          <BackArrowIcon fillColor="#5F564C" />
        </BackButtonWrapper>
        <S.SelectTreasureCntWrapper>
          <S.SelectedTitle>{treasureName}</S.SelectedTitle>
          <S.FlexBox>
            <S.TreasureWrapper $isClicked={true}>{checkTreasure()}</S.TreasureWrapper>
            <S.TreasureContentWrapper>
              <p>1개 {price}원</p>
              <p>수익율 {interestRate * 100}%</p>
              <p>난이도 {level(treasureId)} </p>
            </S.TreasureContentWrapper>
          </S.FlexBox>
          <>
            <S.Title>투자할 보물의 개수를 입력해주세요</S.Title>
            <Input placeholder="100개 단위로 입력해주세요" onChange={checkTotalCnt}></Input>
            <S.FlexBox>
              <Button onClick={moveToNextStep}>확인</Button>
            </S.FlexBox>
          </>
        </S.SelectTreasureCntWrapper>
      </PaperLayout>
    </>
  );
};

export default SelectTreasureCnt;

const BackButtonWrapper = styled.section`
  position: absolute;
  margin: 1% 0 0 3%;
`;
