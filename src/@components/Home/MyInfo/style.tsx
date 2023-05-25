import {
  MiniProfileKiKi,
  MiniProfileAgo,
  MiniProfileBB,
  MiniProfileKolly,
  MiniProfileLamu,
  Rank1,
  Rank2,
  Rank3,
  Rank4,
  Rank5,
  Rank6,
} from "@/assets";
import { styled } from "styled-components";
import paper from "../../../assets/icon/homeMyInfoIc.svg";

export const MyInfoWrapper = styled.section`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 32rem;
  height: 17rem;

  margin: 4rem;
  padding: 3.2rem;

  background-image: url(${paper});
  background-repeat: no-repeat;

  ${({ theme }) => theme.fonts.text}
  z-index: 2;
`;
export const Money = styled.p`
  ${({ theme }) => theme.fonts.log}
`;
export const Won = styled.p`
  margin-right: 1rem;
  ${({ theme }) => theme.fonts.won}
`;

export const MiniProfileKiKiImg = styled(MiniProfileKiKi)`
  width: 10rem;
  height: 10rem;
`;
export const MiniProfileAgoImg = styled(MiniProfileAgo)`
  width: 10rem;
  height: 10rem;
`;
export const MiniProfileBBImg = styled(MiniProfileBB)`
  width: 10rem;
  height: 10rem;
`;
export const MiniProfileKollyImg = styled(MiniProfileKolly)`
  width: 10rem;
  height: 10rem;
`;
export const MiniProfileLamuImg = styled(MiniProfileLamu)`
  width: 10rem;
  height: 10rem;
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MoneyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Rank1Ic = styled(Rank1)`
  width: 5rem;
  height: 5rem;
`;
export const Rank2Ic = styled(Rank2)`
  width: 5rem;
  height: 5rem;
`;
export const Rank3Ic = styled(Rank3)`
  width: 5rem;
  height: 5rem;
`;
export const Rank4Ic = styled(Rank4)`
  width: 5rem;
  height: 5rem;
`;
export const Rank5Ic = styled(Rank5)`
  width: 5rem;
  height: 5rem;
`;
export const Rank6Ic = styled(Rank6)`
  width: 5rem;
  height: 5rem;
`;
export const UserInfoWrapper = styled.div`
  display: flex;
`;
