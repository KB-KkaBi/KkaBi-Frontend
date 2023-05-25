import { Button, Modal, PaperLayout } from "@/@components";
import { getQuizList } from "@/api/invest";
import { selectedButtonArray, selectedButtonIndex } from "@/recoil/Quiz";
import hangul from "hangul-js";
import { useCallback, useContext, useMemo, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
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
  return array?.sort(() => Math.random() - 0.5);
}

const treasureId: number = 2;

const Quiz = () => {
  const { data: quizData } = useQuery(["quizInfo", treasureId], () => getQuizList(treasureId));
  const randomQuiz = Array.isArray(quizData) ? quizData[Math.floor(Math.random() * quizData.length)] : "";
  const selectedArray = useRecoilValue(selectedButtonArray);
  const buttonArray = useMemo(() => shuffle(randomQuiz?.array?.split(", ")), [randomQuiz]);
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = useCallback(() => {
    setOpen(false);
    navigate("../../home");
  }, []);
  const themeContext = useContext(ThemeContext);

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
          <S.QuizContent>{randomQuiz.problem}</S.QuizContent>
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
          <div>
            투자한 <S.TreasureCount $color={themeContext?.colors.darkYellow}>{500}</S.TreasureCount>개의 반지가
            <br />
            <S.TreasureCount $color={"#FC1616"}>{525}</S.TreasureCount>개가 되었습니다
          </div>
          <Button onClick={handleClose}>확인</Button>
        </S.ModalContent>
      </Modal>
    </PaperLayout>
  );
};

export default Quiz;
