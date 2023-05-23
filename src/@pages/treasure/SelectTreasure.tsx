import { Button, PaperLayout } from "@/@components";
import TreasureCardContent from "@/@components/common/card/TreasureCardContent";
import { TREASURES_DATA } from "@/core/treasuresData";
import { styled } from "styled-components";
import TreasureCard from "./TreasureCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SelectTreasure = () => {
  const [selectTreasure, setSelectTreasure] = useState({
    treasureId: 0,
    treasureName: "",
    interestRate: 0,
    price: 0,
  });

  const navigate = useNavigate();

  function moveToSelectCnt() {
    // navigate('/', {state:}})
  }

  //클릭한 보물 저장
  function clickTreasureCare(treasureId: number, treasureName: string, interestRate: number, price: number) {
    setSelectTreasure({ treasureId: treasureId, treasureName: treasureName, interestRate: interestRate, price: price });
  }

  function checkIsClicked(id: number) {
    return id === selectTreasure.treasureId;
  }

  return (
    <>
      <PaperLayout>
        <Title>보물을 선택해주세요</Title>
        <CardContainer>
          <CardWrapper>
            {TREASURES_DATA.map(({ treasureId, treasureName, interestRate, price }) => (
              <>
                {treasureId % 2 !== 0 ? (
                  <>
                    <TreasureCardContent id={treasureId} name={treasureName} interest={interestRate} price={price} />
                    <TreasureCard
                      treasure={treasureId}
                      onClick={() => clickTreasureCare(treasureId, treasureName, interestRate, price)}
                      isClicked={checkIsClicked(treasureId)}
                    />
                  </>
                ) : (
                  <>
                    <TreasureCard
                      treasure={treasureId}
                      onClick={() => clickTreasureCare(treasureId, treasureName, interestRate, price)}
                      isClicked={checkIsClicked(treasureId)}
                    />
                    <TreasureCardContent id={treasureId} name={treasureName} interest={interestRate} price={price} />
                  </>
                )}
              </>
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
