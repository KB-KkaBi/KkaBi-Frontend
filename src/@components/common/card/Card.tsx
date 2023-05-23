import { Account1, Account2, Account3, Account4 } from "@/assets";
import { styled } from "styled-components";
import * as S from "./style";

interface CardProps {
  account: number;
}

const Card = (props: CardProps) => {
  const { account } = props;

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

  return <CardWrapper>{checkAccount()}</CardWrapper>;
};

export default Card;

const CardWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20rem;
  height: 20rem;

  margin: 1rem;

  border-radius: 3rem;

  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.main};
    box-shadow: 0rem 0rem 2rem ${({ theme }) => theme.colors.main};
  }
`;
