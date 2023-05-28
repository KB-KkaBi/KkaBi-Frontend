import { Button, Modal, PaperLayout } from "@/@components";
import { BackArrowIcon } from "@/@components/common/icon/Icons";
import Input from "@/@components/common/textField/CommonTextField";
import { postInvestLog } from "@/api/treasure";
import { level } from "@/core/treasureLevel";
import { investInfo } from "@/recoil/Invest";
import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import * as S from "./style";

const SelectTreasureCnt = () => {
  const { state } = useLocation();
  const { treasureId, treasureName, interestRate, price } = state.selectTreasure;
  const accountMoney = state.accountMoney;
  const [cnt, setCnt] = useState(0);
  const [open, setOpen] = useState(false);
  const [isHundred, setIsHundred] = useState(false);
  const navigate = useNavigate();
  const [investData, setInvestData] = useRecoilState(investInfo);
  const [investLog, setInvestLog] = useState({
    accountId: -1,
    accountLogMoney: 0,
    transactionAmount: 0,
    transactionType: "",
    transactionReason: "",
  });
  const [isLessMoney, setIsLessMoney] = useState(false);

  console.debug(investData);

  const { mutate: postLog } = useMutation(postInvestLog, {
    onSuccess: () => {
      console.debug("포스트 성공");
      navigate("../quiz");
    },
    onError: (error) => {
      console.debug(error);
    },
  });

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
    if (cnt % 100 === 0) {
      setIsHundred(true);
    } else {
      setIsHundred(false);
    }
  }

  function moveToQuiz() {
    setInvestData((prev) => ({ ...prev, count: cnt }));
    // 이미 있는 돈에서 투자할 만큼 빠져도 -가 안 나는지
    console.debug("accountMoney" + accountMoney);
    console.debug("cnt" + cnt);
    console.debug("price" + price);
    console.debug(accountMoney - cnt * price);
    if (accountMoney - cnt * price >= 0) {
      investData &&
        setInvestLog({
          accountId: investData?.accountId,
          accountLogMoney: accountMoney - cnt * price,
          transactionAmount: -cnt * price,
          transactionType: "투자",
          transactionReason: "투자",
        });
      console.debug(investLog);
    } else {
      setOpen(open);
      setIsLessMoney(true);
    }
  }
  console.debug(investData);

  useEffect(() => {
    investLog.transactionType && postLog(investLog);
  }, [investLog]);

  function modal() {
    // 100개의 단위로 입력한 경우
    if (isHundred) {
      // 돈이 모자란 경우
      if (isLessMoney) {
        return (
          <Modal open={open} onClose={handleClose}>
            <S.ModalContent>
              <S.TextWrapper>
                <p>통장의 돈이</p>
                <p>충분하지 않습니다</p>
              </S.TextWrapper>
              <Button onClick={handleClose}>확인</Button>
            </S.ModalContent>
          </Modal>
        );
      }
      // 돈이 충분한 경우
      else {
        return (
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
        );
      }
    } else {
      return (
        <Modal open={open} onClose={handleClose}>
          <S.ModalContent>
            <S.TextWrapper>
              <p>100개 단위로</p>
              <p>입력해주세요</p>
            </S.TextWrapper>
            <Button onClick={handleClose}>확인</Button>
          </S.ModalContent>
        </Modal>
      );
    }
  }

  return (
    <>
      {modal()}
      <PaperLayout>
        <BackButtonWrapper>
          <BackArrowIcon fillColor="#5F564C" onClick={() => navigate("../select-treasure")} />
        </BackButtonWrapper>
        <S.SelectTreasureCntWrapper>
          <S.SelectedTitle>{treasureName}</S.SelectedTitle>
          <S.FlexBox>
            <S.TreasureWrapper $isClicked={true}>{checkTreasure()}</S.TreasureWrapper>
            <S.TreasureContentWrapper>
              <p>1개 {price}원</p>
              <p>수익율 {Math.floor(interestRate * 100)}%</p>
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
