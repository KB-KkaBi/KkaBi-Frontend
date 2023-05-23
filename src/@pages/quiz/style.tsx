import { Button } from "@mui/material";
import { styled } from "styled-components";

export const QuizWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 0;
  height: 100%;
  justify-content: space-between;
`;

export const QuizMainContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

export const QuizContent = styled.p`
  width: 53rem;
  height: 53rem;
  align-items: center;
  padding: 8rem 6rem;
  background-color: ${({ theme }) => theme.colors.whiteYellow};
  border-radius: 4rem;
  float: left;
  margin-right: 4rem;
  ${({ theme }) => theme.fonts.button}
`;

export const ButtonContanier = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: flex;
  column-gap: 2rem;
`;

export const MyAnswer = styled.p`
  text-align: center;
  ${({ theme }) => theme.fonts.button}
`;

export const AnswerSelectorContainer = styled.div`
  width: 54rem;
  height: 54rem;
  display: grid;
  grid-template-columns: repeat(5, 10rem);
  grid-template-rows: repeat(5, 10rem);
  gap: 1rem;
`;

export const StyledButton = styled(Button)<{ $isVowel: boolean }>`
  && {
    width: 10rem;
    height: 10rem;
    border-radius: 3rem;
    color: black;
    background-color: ${({ $isVowel, theme }) => ($isVowel ? theme.colors.blue : theme.colors.green)};
    ${({ theme }) => theme.fonts.quiz}
  }
`;
