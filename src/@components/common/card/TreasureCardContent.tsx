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

  function level() {
    switch (id) {
      case 1:
        return "하";
      case 2:
        return "중";
      case 3:
        return "상";
      case 4:
        return "최상";
      default:
        return;
    }
  }

  return (
    <>
      <CardContainer>
        <Title>{name}</Title>
        <Content>1개 {price}원</Content>
        <Content>수익률 {interest * 100}%</Content>
        <Content>난이도 {level()}</Content>
      </CardContainer>
    </>
  );
};

export default TreasureCardContent;

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 23rem;
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
