import React from "react";
import AnswerButton from "./AnswerButton";
import * as S from "./style";
export type AnswerSelectorProps = {
  array: string[];
};

const AnswerSelector = ({ array }: AnswerSelectorProps) => {
  return (
    <S.AnswerSelectorContainer>
      {array?.map((val, index) => (
        <AnswerButton value={val} index={index} />
      ))}
    </S.AnswerSelectorContainer>
  );
};
const MemoizedAnswerSelector = React.memo(AnswerSelector);
export default MemoizedAnswerSelector;
