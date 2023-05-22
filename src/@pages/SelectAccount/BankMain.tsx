import { BackArrowIcon } from "@/@components/common/icon/Icons";
import BankBackground from "@/assets/image/bankBankground.png";
import { styled } from "styled-components";
import { BankLayout } from "@/@components/common/";

const BankMain = () => {
  return (
    <>
      <BankLayout>
        <QuestionWrapper>
          <p>KB 국민 은행에 오신 것을 환영합니다.</p>
          <p>무엇을 도와드릴까요?</p>
        </QuestionWrapper>
      </BankLayout>
    </>
  );
};

export default BankMain;

const QuestionWrapper = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 10rem;

  ${({ theme }) => theme.fonts.button}
`;
