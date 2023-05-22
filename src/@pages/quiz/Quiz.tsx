import { PaperLayout } from "@/@components";
import * as S from "./style";

const Quiz = () => {
  type QuizInfo = {
    quizId: number;
    problem: string;
    answer: string;
    array: string;
    quizLevel: number;
  };
  const quizInfo: QuizInfo[] = [
    {
      quizId: 1,
      problem:
        "주식회사의 자본을 구성하는 단위이며, 사원인 주주가 주식회사에 출자한 일정한 지분 또는 이를 나타내는 증권이란 무엇일까요?",
      answer: "주식",
      array: "ㅈ, ㄱ, ㄴ, ㄹ, ㅁ, ㅇ, ㅂ, ㄷ, ㅅ, ㅎ, ㅌ, ㅈ, ㅇ, ㅡ, ㄱ, ㅏ, ㅓ, ㅑ, ㅣ, ㅢ, ㅠ, ㅣ, ㅜ, ㅏ, ㅡ",
      quizLevel: 2,
    },
    {
      quizId: 2,
      problem:
        "일정금액을 매월 일정기간 동안에 불입한 이후 약정계약 만료 이후에 금액 + 이자를 받는 예금 형식을 나타내는 단어는?",
      answer: "적금",
      array: "ㅈ, ㄱ, ㄴ, ㄹ, ㅁ, ㅇ, ㅂ, ㄷ, ㅅ, ㅎ, ㅌ, ㅈ, ㅇ, ㅡ, ㄱ, ㅏ, ㅓ, ㅑ, ㅣ, ㅢ, ㅠ, ㅣ, ㅜ, ㅏ, ㅡ",
      quizLevel: 3,
    },
    {
      quizId: 3,
      problem:
        "____는 기업의 재무상태나 경영 성과를 기록한 문서를 나타내는 단어입니다. ____의 종류로는 재무상태표, 손익계산서, 현금흐름표, 자본변동표가 있습니다. ____에 들어갈 말은 무엇일까요?",
      answer: "재무제표",
      array: "ㅈ, ㄱ, ㄴ, ㄹ, ㅁ, ㅇ, ㅂ, ㄷ, ㅅ, ㅎ, ㅍ, ㅈ, ㅇ, ㅡ, ㄱ, ㅏ, ㅓ, ㅔ, ㅣ, ㅛ, ㅠ, ㅣ, ㅜ, ㅐ, ㅡ",
      quizLevel: 3,
    },
  ];
  const selectedIndex = 2;
  return (
    <PaperLayout>
      <>
        <S.QuizContent>{quizInfo[selectedIndex].problem}</S.QuizContent>
        <S.AnswerSelector>
          {quizInfo[selectedIndex].array.split(", ")?.map((val) => (
            <p>{val}</p>
          ))}
        </S.AnswerSelector>
      </>
    </PaperLayout>
  );
};

export default Quiz;
