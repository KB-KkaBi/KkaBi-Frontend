import { PaperLayout } from "@/@components";
import React from "react";
import { styled } from "styled-components";

const SelectTreasure = () => {
  return (
    <>
      <PaperLayout>
        <Title>보물을 선택해주세요</Title>
      </PaperLayout>
    </>
  );
};

export default SelectTreasure;

const Title = styled.h1`
  display: flex;
  justify-content: center;

  padding-top: 3rem;

  ${({ theme }) => theme.fonts.button}
`;
