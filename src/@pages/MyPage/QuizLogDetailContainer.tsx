import { QuizLogData } from "./QuizNote";
import * as S from "./styles/quiznoteStyle";

const QuizLogDetailContainer = ({ quizInfo, treasureInfo, quizLogId }: QuizLogData) => {
  return (
    <S.QuizLogDetail>
      <S.QuizDetailNum>{quizLogId}</S.QuizDetailNum>
      <S.QuizDetailQuestion>{quizInfo?.problem}</S.QuizDetailQuestion>
      <S.QuizDetailAnswer>{quizInfo?.answer}</S.QuizDetailAnswer>
      <S.QuizDetailLevel>{treasureInfo?.treasureId || 0}</S.QuizDetailLevel>
    </S.QuizLogDetail>
  );
};

export default QuizLogDetailContainer;
