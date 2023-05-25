import { selectedButtonArray, selectedButtonIndex } from "@/recoil/Quiz";
import * as hangul from "hangul-js";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import * as S from "./style";

export type AnswerButtonProps = {
  value: string;
  index: number;
};

const AnswerButton = (props: AnswerButtonProps) => {
  const { value, index } = props;
  const isVowel = hangul.isVowel(value);
  const [selectedButtons, setSelectedButtons] = useRecoilState(selectedButtonIndex);
  const setSelectedAnswer = useSetRecoilState(selectedButtonArray);
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    setSelected(selectedButtons.indexOf(index) !== -1);
  }, [selectedButtons]);

  const handleClick = () => {
    setSelectedButtons((selectedButtons) => [...selectedButtons, index]);
    setSelectedAnswer((selectedAnswers) => [...selectedAnswers, value]);
  };

  return (
    <S.StyledButton $isVowel={isVowel} onClick={handleClick} disabled={selected}>
      {value}
    </S.StyledButton>
  );
};

export default AnswerButton;
