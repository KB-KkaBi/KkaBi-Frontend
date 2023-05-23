import { Button, Modal, PaperLayout } from "@/@components";
import { selectedButtonArray, selectedButtonIndex } from "@/recoil/Quiz";
import hangul from "hangul-js";
import { useCallback, useContext, useMemo, useState } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { ThemeContext } from "styled-components";
import MemoizedAnswerSelector from "./AnswerSelector";
import * as S from "./style";

type QuizInfo = {
  quizId: number;
  problem: string;
  answer: string;
  array: string;
  quizLevel: number;
};

function shuffle(array: string[]) {
  return array.sort(() => Math.random() - 0.5);
}

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

const Quiz = () => {
  const selectedArray = useRecoilValue(selectedButtonArray);
  const buttonArray = useMemo(() => shuffle(quizInfo[selectedIndex].array.split(", ")), []);
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { colors } = useContext(ThemeContext);

  const resetButtonArray = useResetRecoilState(selectedButtonArray);
  const resetIndexArray = useResetRecoilState(selectedButtonIndex);

  const handleReset = useCallback(() => {
    resetButtonArray();
    resetIndexArray();
  }, []);

  const handleSubmit = () => {
    console.debug("제출: ", hangul.assemble(selectedArray));
    handleOpen();
    handleReset();
  };

  return (
    <PaperLayout>
      <S.QuizWrapper>
        <S.MyAnswer>나의 답: {hangul.assemble(selectedArray)}</S.MyAnswer>
        <S.QuizMainContainer>
          <S.QuizContent>{quizInfo[selectedIndex].problem}</S.QuizContent>
          <MemoizedAnswerSelector array={buttonArray} />
        </S.QuizMainContainer>
        <S.ButtonContanier>
          <Button onClick={handleReset} disabled={!selectedArray.length}>
            초기화
          </Button>
          <Button onClick={handleSubmit} disabled={!selectedArray.length}>
            확인
          </Button>
        </S.ButtonContanier>
      </S.QuizWrapper>
      <Modal open={open}>
        <S.ModalContent>
          <div>정답입니다</div>
          <p>
            투자한 <S.TreasureCount $color={colors.darkYellow}>{500}</S.TreasureCount>개의 반지가
            <br />
            <S.TreasureCount $color={"#FC1616"}>{525}</S.TreasureCount>개가 되었습니다
          </p>
          <Button onClick={handleClose}>확인</Button>
        </S.ModalContent>
      </Modal>
    </PaperLayout>
  );
};

export default Quiz;
