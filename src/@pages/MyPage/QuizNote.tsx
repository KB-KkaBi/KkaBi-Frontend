import CommonQuizNoteLayout from "@/@components/common/layout/CommonQuizNoteLayout";
import { getQuizLog } from "@/api/mypage";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import QuizLogDetailContainer from "./QuizLogDetailContainer";
import * as S from "./styles/quiznoteStyle";

export type QuizInfo = {
  quizId?: number;
  problem?: string;
  answer?: string;
  hint?: string;
};

export type QuizLogData = {
  quizLogId?: number;
  quizInfo?: QuizInfo;
  treasureInfo?: any;
};

const QuizWrongNote = () => {
  const navigate = useNavigate();
  const { data: quizLogList } = useQuery(["quizLog"], () => getQuizLog(0, 5));

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
        {quizLogList?.content?.map((log: QuizLogData) => {
          return (
            <QuizLogDetailContainer
              quizInfo={log.quizInfo}
              quizLogId={log.quizLogId}
              treasureInfo={log.treasureInfo}
              key={log.quizLogId}
            />
          );
        })}
      </S.QuizNoteLogContainer>
    </CommonQuizNoteLayout>
  );
};

export default QuizWrongNote;
