import { styled } from "styled-components";
import {
  HomeMyInfoIc,
  MiniProfileAgo,
  MiniProfileBB,
  MiniProfileKiKi,
  MiniProfileKolly,
  MiniProfileLamu,
} from "../../assets";
import { STAR_FRIENDS } from "@/core/starFriends";
import { St } from "./style";

interface characterNameProps {
  characterName: String;
  nickName: String;
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

  return (
    <St.MyInfoWrapper>
      {miniProfile()}
      <St.TextWrapper>
        <p>{nickName}</p>
        <St.MoneyWrapper>
          <St.Won>₩</St.Won>
          <St.Money>{totalMoney}</St.Money>
        </St.MoneyWrapper>
      </St.TextWrapper>
    </St.MyInfoWrapper>
  );
};

export default MyInfo;
