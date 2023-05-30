import { Button, Modal, PaperLayout } from "@/@components";
import { getQuizList, postQuizAnswer } from "@/api/invest";
import { getTotalQuizLog } from "@/api/mypage";
import { InvestDTO, investInfo } from "@/recoil/Invest";
import { selectedButtonArray, selectedButtonIndex } from "@/recoil/Quiz";
import hangul from "hangul-js";
import { useCallback, useContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { ThemeContext } from "styled-components";
import MemoizedAnswerSelector from "./AnswerSelector";
import * as S from "./style";

function shuffle(array: string[]): string[] {
  return array?.sort(() => Math.random() - 0.5);
}

const Quiz = () => {
  const [investData, setInvestData] = useRecoilState(investInfo);
  const [quizData, setQuizData] = useState({ problem: "" }); // 화면에 표시할 퀴즈의 정보
  const [buttonArray, setButtonArray] = useState<string[]>();
  const [success, setSuccess] = useState(); // 답 제출 시 정답 여부
  const [total, setTotal] = useState(); // 답 제출 시 결과로 만들어진 보물 개수
  const { data: quizArray } = useQuery(["quizInfo", investData.treasureId], () => getQuizList(investData.treasureId));
  const { data: quizLogList } = useQuery(["getTotalQuizLog"], () => getTotalQuizLog()); // 퀴즈 전체 리스트
  const [myAnswer, setMyAnswer] = useState<string>();

  useEffect(() => {
    if (Array.isArray(quizArray)) {
      const filteredQuizList = quizArray.filter((quiz) => {
        let flag = false; // 로그에 존재하면 true 반환
        quizLogList.array.forEach((log: any) => {
          if (log.quizInfo?.quizId === quiz.quizId) {
            flag = true;
          }
        });
        return !flag;
      });
      const randomQuiz =
        filteredQuizList.length > 0 ? filteredQuizList[Math.floor(Math.random() * quizArray.length)] : undefined;
      if (randomQuiz) {
        setQuizData(randomQuiz);
        setInvestData(({ quizId, ...data }) => {
          const newData = {
            ...data,
            quizId: randomQuiz.quizId || 0,
          };
          console.debug("quiz - ", newData);
          return newData;
        });
        if (typeof randomQuiz.array === "string") {
          const arr = shuffle(randomQuiz.array.split(", "));
          setButtonArray(arr);
        }
      }
    }
  }, [quizArray]);

  const selectedArray = useRecoilValue(selectedButtonArray);
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
  // const [investData, setInvestData] = useRecoilState(investInfo);

  const handleReset = useCallback(() => {
    resetButtonArray();
    resetIndexArray();
  }, []);
  const { mutate: investPost } = useMutation(
    (investData: InvestDTO) => {
      const { accountId, ...investPostData } = investData;
      return postQuizAnswer({ ...investPostData, answer: myAnswer || "" });
    },
    {
      onSuccess: (response) => {
        console.debug(response);
        setSuccess(response.data?.success);
        setTotal(response.data?.total);
        handleOpen();
        handleReset();
      },
    },
  );

  useEffect(() => setMyAnswer(hangul.assemble(selectedArray)), [selectedArray]);

  const handleSubmit = () => {
    const ans = hangul.assemble(selectedArray);
    setInvestData((data) => {
      const newData = { ...data, answer: ans };
      console.debug(newData);
      return newData;
    });
    investPost(investData);
  };

  function checkTreasure() {
    switch (investData.treasureId) {
      case 1:
        return "사파이어";
      case 2:
        return "반지";
      case 3:
        return "왕관";
      case 4:
        return "다이아몬드";
    }
  }

  return (
    <PaperLayout>
      <S.QuizWrapper>
        <S.MyAnswer>나의 답: {hangul.assemble(selectedArray)}</S.MyAnswer>
        <S.QuizMainContainer>
          <S.QuizContent>{quizData?.problem || ""}</S.QuizContent>
          <MemoizedAnswerSelector array={buttonArray || []} />
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
          {success ? (
            <div>
              <S.CorrectIcon />
              정답입니다
              <S.CorrectIcon />
            </div>
          ) : (
            <div>
              <S.WrongIcon />
              오답입니다
              <S.WrongIcon />
            </div>
          )}
          <div>
            투자한 <S.TreasureCount $color={themeContext?.colors.darkYellow}>{investData.count}</S.TreasureCount>
            개의 {checkTreasure()}가
            <br />
            <S.TreasureCount $color={success ? "#FC1616" : "#162DFC"}>{total}</S.TreasureCount>개가 되었습니다
          </div>
          <Button onClick={handleClose}>확인</Button>
        </S.ModalContent>
      </Modal>
    </PaperLayout>
  );
};

export default Quiz;
