import { Account1, Account2, Account3, Account4 } from "@/assets";
import { styled } from "styled-components";
import * as S from "./style";

interface CardProps {
  treasure: number;
  onClick: () => void;
  isClicked: boolean;
}

const TreasureCard = (props: CardProps) => {
  const { treasure, onClick, isClicked } = props;

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

  return (
    <S.TreasureWrapper onClick={onClick} isClicked={isClicked}>
      {checkTreasure()}
    </S.TreasureWrapper>
  );
};

export default TreasureCard;
