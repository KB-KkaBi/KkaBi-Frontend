import {
  BigProfileAgo,
  BigProfileBB,
  BigProfileKiKi,
  BigProfileKolly,
  BigProfileLamu,
  Rank1,
  Rank2,
  Rank3,
  Rank4,
  Rank5,
  Rank6,
} from "@/assets";
import styled from "styled-components";

export const MyPageRootContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  //justify-content: center;
  align-items: center;
  ${({ theme }) => theme.fonts.text}
`;

export const UserNickNameContainer = styled.div`
  display: flex;
  margin-top: 10rem;
  margin-bottom: 3.5rem;
  .text {
    margin-right: 1rem;
    font-size: 8rem;
  }
`;
export const RankListWrapper = styled.div`
  cursor: pointer;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const UserProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35rem;
  height: 35rem;
`;
export const UserMoneyInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 38rem;
  margin-left: 1rem;
  margin-right: 5rem;
`;

export const UserMoneyTotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 4rem;

  .text {
    margin-left: 2rem;
  }
`;

export const UserTreasureTotalWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  font-size: 4rem;
`;

export const Treasure = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const PieChartContainer = styled.div`
  width: 35rem;
  height: 35rem;
  font-size: 4rem;
  ${({ theme }) => theme.fonts.log}
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 12rem;

  .btn {
    width: 35rem;

    &:nth-child(2) {
      margin-left: 3rem;
      margin-right: 3rem;
    }
  }
`;
/**
 * SVG 컴포넌트 만들기
 */
export const Ranking1Icon = styled(Rank1)`
  width: 5rem;
  height: 5rem;
`;
export const Ranking2Icon = styled(Rank2)`
  width: 5rem;
  height: 5rem;
`;
export const Ranking3Icon = styled(Rank3)`
  width: 5.5rem;
  height: 5.5rem;
`;
export const Ranking4Icon = styled(Rank4)`
  width: 5.5rem;
  height: 5.5rem;
`;
export const Ranking5Icon = styled(Rank5)`
  width: 5.5rem;
  height: 5.5rem;
`;
export const Ranking6Icon = styled(Rank6)`
  width: 5.5rem;
  height: 5.5rem;
`;

export const BigProfileAgoImg = styled(BigProfileAgo)`
  width: 30rem;
  height: 30rem;
`;
export const BigProfileBBImg = styled(BigProfileBB)`
  width: 30rem;
  height: 30rem;
`;
export const BigProfileKiKiImg = styled(BigProfileKiKi)`
  width: 30rem;
  height: 30rem;
`;
export const BigProfileKollyImg = styled(BigProfileKolly)`
  width: 30rem;
  height: 30rem;
`;
export const BigProfileLamuImg = styled(BigProfileLamu)`
  width: 30rem;
  height: 30rem;
`;
