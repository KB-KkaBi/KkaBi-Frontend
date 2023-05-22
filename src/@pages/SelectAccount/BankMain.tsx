import { BackArrowIcon } from "@/@components/common/icon/Icons";
import BankBackground from "@/assets/image/bankBankground.png";
import { styled } from "styled-components";
import { BankLayout, Button } from "@/@components/common/";

const BankMain = () => {
  return (
    <>
      <BankLayout>
        <QuestionWrapper>
          <p>KB 국민 은행에 오신 것을 환영합니다.</p>
          <p>무엇을 도와드릴까요?</p>
        </QuestionWrapper>
        <ButtonWrapper>
          <Button>계좌 개설</Button>
          <Button>나의 계좌</Button>
        </ButtonWrapper>
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

const ButtonWrapper = styled.section`
  display: flex;
  justify-content: space-evenly;

  margin: 40rem 0 6rem 30rem;

  width: 84rem;
`;
