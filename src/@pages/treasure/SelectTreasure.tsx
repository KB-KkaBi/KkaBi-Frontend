import { PaperLayout } from "@/@components";
import Card from "@/@components/common/card/Card";
import CardContent from "@/@components/common/card/CardContent";
import TreasureCardContent from "@/@components/common/card/TreasureCardContent";
import { TREASURES_DATA } from "@/core/treasuresData";
import React from "react";
import { styled } from "styled-components";
import TreasureCard from "./TreasureCard";

const SelectTreasure = () => {
  return (
    <>
      <PaperLayout>
        <Title>보물을 선택해주세요</Title>
        <CardWrapper>
          {TREASURES_DATA.map(({ treasureId, treasureName, interestRate, price }) => (
            <>
              {treasureId % 2 !== 0 ? (
                <>
                  <TreasureCardContent id={treasureId} name={treasureName} interest={interestRate} price={price} />
                  <TreasureCard treasure={treasureId} />
                </>
              ) : (
                <>
                  <TreasureCard treasure={treasureId} />
                  <TreasureCardContent id={treasureId} name={treasureName} interest={interestRate} price={price} />
                </>
              )}
            </>
          ))}
        </CardWrapper>
      </PaperLayout>
    </>
  );
};

export default SelectTreasure;

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
