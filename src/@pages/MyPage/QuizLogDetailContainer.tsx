import React from "react";
import { QuizLogData } from "./QuizNote";
import * as S from "./styles/quiznoteStyle";

type Props = {
  log: QuizLogData;
};

const QuizLogDetailContainer = ({ log }: Props) => {
  return (
    <S.QuizLogDetail>
      <S.QuizDetailNum>{log.quizLogId}</S.QuizDetailNum>
      <S.QuizDetailQuestion>{log.question}</S.QuizDetailQuestion>
      <S.QuizDetailAnswer>{log.answer}</S.QuizDetailAnswer>
      <S.QuizDetailLevel>{log.level}</S.QuizDetailLevel>
    </S.QuizLogDetail>
  );
};

export default QuizLogDetailContainer;
