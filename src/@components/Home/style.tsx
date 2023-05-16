import { HomeMyInfoIc, MiniProfileKiKi } from "@/assets";
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
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  MoneyWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
