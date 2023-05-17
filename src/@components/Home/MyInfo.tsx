import { styled } from "styled-components";
import {
  HomeMyInfoIc,
  MiniProfileAgo,
  MiniProfileBB,
  MiniProfileKiKi,
  MiniProfileKolly,
  MiniProfileLamu,
  Rank1,
  Rank2,
  Rank3,
  Rank4,
  Rank5,
  Rank6,
} from "../../assets";
import { STAR_FRIENDS } from "@/core/starFriends";
import { St } from "./style";

interface characterNameProps {
  characterName: string;
  nickName: string;
  totalMoney: number;
}

const MyInfo = (props: characterNameProps) => {
  const { characterName, nickName, totalMoney } = props;

  function miniProfile() {
    switch (characterName) {
      case STAR_FRIENDS.AGO:
        return <MiniProfileAgo />;
      case STAR_FRIENDS.BB:
        return <MiniProfileBB />;
      case STAR_FRIENDS.KIKI:
        return <St.MiniProfileKiKiImg />;
      case STAR_FRIENDS.KOLLY:
        return <MiniProfileKolly />;
      case STAR_FRIENDS.LAMU:
        return <MiniProfileLamu />;
      default:
        return;
    }
  }

  function rank() {
    if (totalMoney >= 40000) return <Rank1 />;
    else if (totalMoney >= 30000) return <Rank2 />;
    else if (totalMoney >= 25000) return <Rank3 />;
    else if (totalMoney >= 20000) return <Rank4 />;
    else if (totalMoney >= 15000) return <Rank5 />;
    else if (totalMoney >= 10000) return <Rank6 />;
  }

  return (
    <St.MyInfoWrapper>
      {miniProfile()}
      <St.TextWrapper>
        <p>{nickName}</p>
        {rank()}
        <St.MoneyWrapper>
          <St.Won>₩</St.Won>
          <St.Money>{totalMoney}</St.Money>
        </St.MoneyWrapper>
      </St.TextWrapper>
    </St.MyInfoWrapper>
  );
};

export default MyInfo;
