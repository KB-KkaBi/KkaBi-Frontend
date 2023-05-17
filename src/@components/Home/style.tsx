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
import paper from "../../assets/icon/homeMyInfoIc.svg";

export const St = {
  MyInfoWrapper: styled.section`
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 32rem;
    height: 17rem;

    margin: 4rem;
    padding: 3rem 5rem 3rem 3rem;

    background-image: url(${paper});
    background-repeat: no-repeat;

    ${({ theme }) => theme.fonts.text}
  `,
  Money: styled.p`
    ${({ theme }) => theme.fonts.log}
  `,
  Won: styled.p`
    margin-right: 1rem;
    ${({ theme }) => theme.fonts.won}
  `,

  MiniProfileKiKiImg: styled(MiniProfileKiKi)`
    width: 10rem;
    height: 10rem;
  `,
  MiniProfileAgoImg: styled(MiniProfileAgo)`
    width: 10rem;
    height: 10rem;
  `,
  MiniProfileBBImg: styled(MiniProfileBB)`
    width: 10rem;
    height: 10rem;
  `,
  MiniProfileKollyImg: styled(MiniProfileKolly)`
    width: 10rem;
    height: 10rem;
  `,
  MiniProfileLamuImg: styled(MiniProfileLamu)`
    width: 10rem;
    height: 10rem;
  `,
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  MoneyWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Rank1Ic: styled(Rank1)`
    width: 5rem;
    height: 5rem;
  `,
  Rank2Ic: styled(Rank2)`
    width: 5rem;
    height: 5rem;
  `,
  Rank3Ic: styled(Rank3)`
    width: 5rem;
    height: 5rem;
  `,
  Rank4Ic: styled(Rank4)`
    width: 5rem;
    height: 5rem;
  `,
  Rank5Ic: styled(Rank5)`
    width: 5rem;
    height: 5rem;
  `,
  Rank6Ic: styled(Rank6)`
    width: 5rem;
    height: 5rem;
  `,
};
