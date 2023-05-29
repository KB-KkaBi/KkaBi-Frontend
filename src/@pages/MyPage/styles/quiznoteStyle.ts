import styled from "styled-components";

export const QuizNoteTitle = styled.p`
  position: absolute;
  ${(props) => props.theme.fonts.title}
  top: 11%;
  left: 50%;
  transform: translate(-50%, 0%);
`;
export const QuizNoteSubtitle = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  top: 23.5%;
  ${(props) => props.theme.fonts.button}
`;

export const QuizNumber = styled.p`
  position: absolute;
  left: 8%;
`;

export const QuizQuestion = styled.p`
  position: absolute;
  left: 16%;
  display: flex;
  align-items: center;
`;

export const QuizAnswer = styled.p`
  position: absolute;
  left: 74.9%;
  display: flex;
  align-items: center;
`;

export const QuizLevel = styled.p`
  position: absolute;
  left: 87.3%;
`;

export const QuizNoteLogContainer = styled.div`
  display: flex;
  position: relative;
  top: 29.7%;
  width: 91%;
  left: 5%;
  flex-direction: column;
  ${(props) => props.theme.fonts.text}
`;

export const QuizNumberDetail = styled.div`
  width: 9rem;
`;

export const QuizLogDetail = styled.div`
  display: flex;
  width: 100%;
  height: 11.5rem;
  align-items: center;
  flex-wrap: wrap;
  ${(props) => props.theme.fonts.log}
  border-bottom: 1px solid black;
`;

export const QuizDetailNum = styled.div`
  width: 10.5%;
  text-align: center;
`;

export const QuizDetailQuestion = styled.div`
  width: 60.5%;
  display: flex;
  flex-wrap: wrap;
`;

export const QuizDetailAnswer = styled.div`
  width: 15%;
  text-align: center;
`;

export const QuizDetailLevel = styled.div`
  width: 14%;
  text-align: center;
`;

export const ArrowBox = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 21rem;

  color: ${({ theme }) => theme.colors.deepBlue};
  ${({ theme }) => theme.fonts.button};

  cursor: pointer;
`;

export const ArrowWrapper = styled.section`
  display: flex;
  justify-content: center;

  position: absolute;
  bottom: 1.5rem;

  width: 100%;
`;
