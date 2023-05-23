import { BackArrowIcon } from "@/@components/common/icon/Icons";
import BankBackground from "@/assets/image/bankBankground.png";
import { styled } from "styled-components";
import { BankLayout, Button } from "@/@components/common/";
import { useNavigate } from "react-router-dom";

const BankMain = () => {
  const navigate = useNavigate();

  const moveToCreateAccount = () => {
    navigate("./create-new-account");
  };

  const moveToMyAccount = () => {
    navigate("/bank");
  };

  return (
    <>
      <BankLayout>
        <QuestionWrapper>
          <p>KB 국민 은행에 오신 것을 환영합니다.</p>
          <p>무엇을 도와드릴까요?</p>
        </QuestionWrapper>
        <ButtonContainer>
          <ButtonWrapper>
            <Button onClick={moveToCreateAccount}>계좌 개설</Button>
            <Button onClick={moveToMyAccount}>나의 계좌</Button>
          </ButtonWrapper>
        </ButtonContainer>
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

  margin: 40rem 0 6rem 0;

  width: 84rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
