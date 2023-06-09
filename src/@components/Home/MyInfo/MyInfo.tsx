import { STAR_FRIENDS } from "@/core/starFriends";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import { styled } from "styled-components";
import * as St from "./style";

interface MyInfoProps {
  characterName: string;
  nickName: string;
  totalMoney: number;
  onClick: () => void;
}

const MyInfo = (props: MyInfoProps) => {
  const { characterName, nickName, totalMoney, onClick } = props;
  const [my, setMy] = useState(false);

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
    else if (totalMoney >= 0) return <St.Rank6Ic />;
  }

  return (
    <>
      <Tooltip
        title="마이페이지"
        placement="bottom"
        componentsProps={{
          tooltip: {
            sx: {
              m: 1,
              bgcolor: "transparent",
              fontFamily: "KOTRAHOPE",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "4.6rem",
              lineHeight: "5.4rem",
              color: "black",
            },
          },
        }}>
        <St.MyInfoWrapper
          onClick={onClick}
          onMouseEnter={() => setMy(true)}
          onMouseLeave={() => setMy(false)}
          $isHover={my}>
          {miniProfile()}
          <St.TextWrapper>
            <St.UserInfoWrapper>
              <Text>{nickName}</Text>
              {rank()}
            </St.UserInfoWrapper>
            <St.MoneyWrapper>
              <St.Won>₩</St.Won>
              <St.Money>{totalMoney.toLocaleString()}</St.Money>
            </St.MoneyWrapper>
          </St.TextWrapper>
        </St.MyInfoWrapper>
      </Tooltip>
    </>
  );
};

export default MyInfo;

const Text = styled.p`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 15rem;
`;
