import { level } from "@/core/treasureLevel";
import React from "react";
import { styled } from "styled-components";

interface CardContentProps {
  id: number;
  name: string;
  interest: number;
  price: number;
}

const TreasureCardContent = (props: CardContentProps) => {
  const { id, name, interest, price } = props;

  return (
    <>
      <CardContainer id={id}>
        <Title>{name}</Title>
        <Content>1개 {price}원</Content>
        <Content>수익률 {interest * 100}%</Content>
        <Content>난이도 {level(id)}</Content>
      </CardContainer>
    </>
  );
};

export default TreasureCardContent;

const CardContainer = styled.article<{ id: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ id }) => (id % 2 === 0 ? "flex-start" : "flex-end")};

  width: 20rem;
  height: 20rem;

  margin: 1rem;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.log}
  font-weight: bold;
`;

const Content = styled.p`
  ${({ theme }) => theme.fonts.log}
`;
