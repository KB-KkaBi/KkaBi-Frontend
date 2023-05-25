import { styled } from "styled-components";
import * as S from "./style";

interface CardProps {
  account: number;
  isClicked: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseOut: () => void;
}

const Card = (props: CardProps) => {
  const { account, isClicked, onClick, onMouseEnter, onMouseOut } = props;

  function checkAccount() {
    switch (account) {
      case 1:
        return <S.Account1Ic />;
      case 2:
        return <S.Account2Ic />;
      case 3:
        return <S.Account3Ic />;
      case 4:
        return <S.Account4Ic />;
      default:
        return;
    }
  }

  console.log("isClicked", isClicked);

  return (
    <CardWrapper isClicked={isClicked} onClick={onClick} onMouseEnter={onMouseEnter} onMouseOut={onMouseOut}>
      {checkAccount()}
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.article<{ isClicked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20rem;
  height: 20rem;

  margin: 1rem;

  border-radius: 3rem;

  cursor: pointer;

  border: ${({ isClicked }) => isClicked && 1}px solid ${({ theme }) => theme.colors.main};
  box-shadow: 0rem 0rem ${({ isClicked }) => isClicked && 2}rem ${({ theme }) => theme.colors.main};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.main};
    box-shadow: 0rem 0rem 2rem ${({ theme }) => theme.colors.main};
  }
`;
