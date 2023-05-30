import CommonQuizNoteLayout from "@/@components/common/layout/CommonQuizNoteLayout";
import { getQuizLogPagnation, getTotalQuizLog } from "@/api/mypage";
import { LeftArrow, RightArrow } from "@/assets";
import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import QuizLogDetailContainer from "./QuizLogDetailContainer";
import * as S from "./styles/quiznoteStyle";

export type QuizInfo = {
  quizId?: number;
  problem?: string;
  answer?: string;
  hint?: string;
  treasureInfo?: any;
};

export type QuizLogData = {
  quizLogId?: number;
  quizInfo?: QuizInfo;
};

const QuizWrongNote = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(0);
  const { data: quizLogList } = useQuery(["getTotalQuizLog"], () => getTotalQuizLog());
  const { data: quizLogPagenation } = useQuery(["quizLogPagenation", page], () => getQuizLogPagnation(page, 4));

  console.debug(quizLogList);

  function checkTotalPage() {
    const len = quizLogList?.length;
    const totalPage = Math.floor(len / 4);
    if (len !== 0) {
      return len % 4 === 0 ? totalPage : totalPage + 1;
    } else {
      return 1;
    }
  }

  console.log(checkTotalPage());

  const handlePage = (num: number) => {
    if (page + num + 1 !== 0 && page + num !== checkTotalPage()) {
      setPage(page + num);
    }
  };

  return (
    <CommonQuizNoteLayout
      handleClick={() => {
        navigate("/mypage");
      }}>
      <>
        <S.QuizNoteTitle>퀴즈 복습노트</S.QuizNoteTitle>
        <S.QuizNoteSubtitle>
          <S.QuizNumber>번호</S.QuizNumber>
          <S.QuizQuestion>문제</S.QuizQuestion>
          <S.QuizAnswer>정답</S.QuizAnswer>
          <S.QuizLevel>난이도</S.QuizLevel>
        </S.QuizNoteSubtitle>
        <S.QuizNoteLogContainer>
          {quizLogPagenation?.content?.map((log: QuizLogData) => {
            return <QuizLogDetailContainer quizInfo={log.quizInfo} quizLogId={log.quizLogId} key={log.quizLogId} />;
          })}
        </S.QuizNoteLogContainer>
        <S.ArrowWrapper>
          <S.ArrowBox>
            <LeftArrow onClick={() => handlePage(-1)} />
            {page + 1} / {checkTotalPage()}
            <RightArrow onClick={() => handlePage(1)} />
          </S.ArrowBox>
        </S.ArrowWrapper>
      </>
    </CommonQuizNoteLayout>
  );
};

export default QuizWrongNote;
