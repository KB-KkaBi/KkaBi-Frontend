import CommonQuizNoteLayout from "@/@components/common/layout/CommonQuizNoteLayout";
import { useNavigate } from "react-router-dom";
import QuizLogDetailContainer from "./QuizLogDetailContainer";
import * as S from "./styles/quiznoteStyle";

export type QuizLogData = {
  quizLogId: number;
  question: string;
  answer: string;
  level: string;
};

const QuizWrongNote = () => {
  const navigate = useNavigate();

  const quizLogList: QuizLogData[] = [
    {
      quizLogId: 1,
      question:
        "주식회사의 자본을 구성하는 단위이며, 사원인 주주가 주식회사에 출자한 일정한 지분 또는 이를 나타내는 증권이란 무엇일까요?",
      answer: "주식",
      level: "3",
    },
    {
      quizLogId: 2,
      question:
        "주식회사의 자본을 구성하는 단위이며, 사원인 주주가 주식회사에 출자한 일정한 지분 또는 이를 나타내는 증권이란 무엇일까요?",
      answer: "주식",
      level: "3",
    },
    {
      quizLogId: 3,
      question:
        "주식회사의 자본을 구성하는 단위이며, 사원인 주주가 주식회사에 출자한 일정한 지분 또는 이를 나타내는 증권이란 무엇일까요?",
      answer: "주식",
      level: "3",
    },
    {
      quizLogId: 4,
      question:
        "주식회사의 자본을 구성하는 단위이며, 사원인 주주가 주식회사에 출자한 일정한 지분 또는 이를 나타내는 증권이란 무엇일까요?",
      answer: "주식",
      level: "3",
    },
  ];
  return (
    <CommonQuizNoteLayout
      handleClick={() => {
        navigate("/mypage");
      }}>
      <S.QuizNoteTitle>퀴즈 오답노트</S.QuizNoteTitle>
      <S.QuizNoteSubtitle>
        <S.QuizNumber>번호</S.QuizNumber>
        <S.QuizQuestion>문제</S.QuizQuestion>
        <S.QuizAnswer>정답</S.QuizAnswer>
        <S.QuizLevel>난이도</S.QuizLevel>
      </S.QuizNoteSubtitle>
      <S.QuizNoteLogContainer>
        {quizLogList.map((log) => {
          return <QuizLogDetailContainer log={log} key={log.quizLogId} />;
        })}
      </S.QuizNoteLogContainer>
    </CommonQuizNoteLayout>
  );
};

export default QuizWrongNote;
