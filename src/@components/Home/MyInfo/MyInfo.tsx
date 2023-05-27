import { STAR_FRIENDS } from "@/core/starFriends";
import * as St from "./style";

interface MyInfoProps {
  characterName: string;
  nickName: string;
  totalMoney: number;
  onClick: () => void;
}

const MyInfo = (props: MyInfoProps) => {
  const { characterName, nickName, totalMoney, onClick } = props;

  function miniProfile() {
    switch (characterName) {
      case STAR_FRIENDS.AGO:
        return <St.MiniProfileAgoImg />;
      case STAR_FRIENDS.BB:
        return <St.MiniProfileBBImg />;
      case STAR_FRIENDS.KIKI:
        return <St.MiniProfileKiKiImg />;
      case STAR_FRIENDS.KOLLY:
        return <St.MiniProfileKollyImg />;
      case STAR_FRIENDS.LAMU:
        return <St.MiniProfileLamuImg />;
      default:
        return;
    }
  }

  function rank() {
    if (totalMoney >= 40000) return <St.Rank1Ic />;
    else if (totalMoney >= 30000) return <St.Rank2Ic />;
    else if (totalMoney >= 25000) return <St.Rank3Ic />;
    else if (totalMoney >= 20000) return <St.Rank4Ic />;
    else if (totalMoney >= 15000) return <St.Rank5Ic />;
    else if (totalMoney >= 10000) return <St.Rank6Ic />;
  }

  return (
    <St.MyInfoWrapper onClick={onClick}>
      {miniProfile()}
      <St.TextWrapper>
        <St.UserInfoWrapper>
          <p>{nickName}</p>
          {rank()}
        </St.UserInfoWrapper>
        <St.MoneyWrapper>
          <St.Won>₩</St.Won>
          <St.Money>{totalMoney.toLocaleString()}</St.Money>
        </St.MoneyWrapper>
      </St.TextWrapper>
    </St.MyInfoWrapper>
  );
};

export default MyInfo;
