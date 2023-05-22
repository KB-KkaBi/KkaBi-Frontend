import React from "react";
import { styled } from "styled-components";

interface CardContentProps {
  title: string;
  content: string;
}

const CardContent = (props: CardContentProps) => {
  const { title, content } = props;

  return (
    <>
      <CardContainer>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </CardContainer>
    </>
  );
};

export default CardContent;

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
