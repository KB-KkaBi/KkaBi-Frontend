import { Button } from "@mui/material";
import { styled } from "styled-components";

export const QuizContainer = styled.div`
  position: relative;
  display: flex;
  top: 50%;
  bottom: 50%;
  width: 100%;
  justify-content: center;
  transform: translate(0%, -50%);
`;

export const QuizContent = styled.p`
  width: 53rem;
  height: 53rem;
  align-items: center;
  padding: 8rem 6rem;
  background-color: ${({ theme }) => theme.colors.whiteYellow};
  border-radius: 4rem;
  float: left;
  ${({ theme }) => theme.fonts.button}
`;

export const MyAnswer = styled.p`
  top: 10%;
  position: relative;
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
  position: relative;
  margin-left: 4rem;
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
