import { Account1, Account2, Account3, Account4 } from "@/assets";
import { styled } from "styled-components";
import * as S from "./style";

interface CardProps {
  treasure: number;
  onClick: () => void;
}

const TreasureCard = (props: CardProps) => {
  const { treasure, onClick } = props;

  function checkTreasure() {
    switch (treasure) {
      case 1:
        return <S.RubieIcon />;
      case 2:
        return <S.RingIcon />;
      case 3:
        return <S.CrownIcon />;
      case 4:
        return <S.DiamondIcon />;
      default:
        return;
    }
  }

  return <TreasureWrapper onClick={onClick}>{checkTreasure()}</TreasureWrapper>;
};

export default TreasureCard;

const TreasureWrapper = styled.article`
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
