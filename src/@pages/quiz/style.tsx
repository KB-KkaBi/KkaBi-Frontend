import { styled } from "styled-components";

export const QuizContent = styled.div`
  width: 53rem;
  height: 53rem;
  display: flex;
  position: relative;
  top: 50%;
  bottom: 50%;
  left: 10rem;
  transform: translate(0%, -50%);
  margin: 0;
  align-items: center;
  padding: 8rem 6rem;
  background-color: ${({ theme }) => theme.colors.whiteYellow};
  border-radius: 4rem;
  float: left;
  ${({ theme }) => theme.fonts.button}
`;

export const AnswerSelector = styled.div`
  width: 54rem;
  height: 54rem;
  display: grid;
  grid-template-columns: repeat(5, 10rem);
  grid-template-rows: repeat(5, 10rem);
  gap: 1rem;
  position: relative;
  top: 50%;
  bottom: 50%;
  margin-left: 4rem;
  transform: translate(0%, -50%);
  p {
    border-radius: 3rem;
    align: justify;
    background-color: gray;
    text-align: center;
    ${({ theme }) => theme.fonts.quiz}
    line-height: 10rem;
  }
`;
