import { Button, PaperLayout } from "@/@components";
import { BackArrowIcon } from "@/@components/common/icon/Icons";
import { getTreasure } from "@/api/treasure";
import { TreasureDataTypes } from "@/core/treasuresData";
import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import TreasureCard from "./TreasureCard";
import TreasureCardContent from "./TreasureCardContent";
import * as S from "./style";

const SelectTreasure = () => {
  const [selectTreasure, setSelectTreasure] = useState({
    treasureId: 0,
    treasureName: "",
    interestRate: 0,
    price: 0,
  });
  const [hoverId, setHoverId] = useState(-1);

  const navigate = useNavigate();

  function moveToSelectCnt() {
    navigate("./select-amount", { state: selectTreasure });
  }

  const { data: treasureData } = useQuery(["treasuerInfo"], getTreasure);

  //클릭한 보물 저장
  function clickTreasureCare(treasureId: number, treasureName: string, interestRate: number, price: number) {
    setSelectTreasure({ treasureId: treasureId, treasureName: treasureName, interestRate: interestRate, price: price });
  }

  function checkIsHoverOfClick(id: number) {
    return id === selectTreasure.treasureId || (id === hoverId && hoverId !== -1);
  }

  return (
    <>
      <PaperLayout>
        <BackButtonWrapper>
          <BackArrowIcon fillColor="#5F564C" />
        </BackButtonWrapper>
        <Title>보물을 선택해주세요</Title>
        <CardContainer>
          <CardWrapper>
            {treasureData?.map(({ treasureId, treasureName, interestRate, price }: TreasureDataTypes) => (
              <div key={treasureId}>
                {treasureId % 2 !== 0 ? (
                  <S.FlexBox>
                    {checkIsHoverOfClick(treasureId) ? (
                      <TreasureCardContent id={treasureId} name={treasureName} interest={interestRate} price={price} />
                    ) : (
                      <S.BlankCard></S.BlankCard>
                    )}
                    <TreasureCard
                      key={treasureId}
                      treasure={treasureId}
                      onClick={() => clickTreasureCare(treasureId, treasureName, interestRate, price)}
                      isClicked={checkIsHoverOfClick(treasureId)}
                      onMouseEnter={() => setHoverId(treasureId)}
                      onMouseOut={() => setHoverId(-1)}
                    />
                  </S.FlexBox>
                ) : (
                  <S.FlexBox>
                    <TreasureCard
                      key={treasureId}
                      treasure={treasureId}
                      onClick={() => clickTreasureCare(treasureId, treasureName, interestRate, price)}
                      isClicked={checkIsHoverOfClick(treasureId)}
                      onMouseEnter={() => setHoverId(treasureId)}
                      onMouseOut={() => setHoverId(-1)}
                    />
                    {checkIsHoverOfClick(treasureId) ? (
                      <TreasureCardContent
                        key={treasureId}
                        id={treasureId}
                        name={treasureName}
                        interest={interestRate}
                        price={price}
                      />
                    ) : (
                      <S.BlankCard></S.BlankCard>
                    )}
                  </S.FlexBox>
                )}
              </div>
            ))}
          </CardWrapper>
        </CardContainer>
        <ButtonWrapper>
          <Button onClick={moveToSelectCnt}>확인</Button>
        </ButtonWrapper>
      </PaperLayout>
    </>
  );
};

export default SelectTreasure;

const ButtonWrapper = styled.section`
  display: flex;
  justify-content: center;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;

  margin: 1rem 0;
`;

const CardWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  width: 100rem;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;

  padding-top: 3rem;

  ${({ theme }) => theme.fonts.button}
`;

const BackButtonWrapper = styled.section`
  position: absolute;
  margin: 1% 0 0 3%;
`;