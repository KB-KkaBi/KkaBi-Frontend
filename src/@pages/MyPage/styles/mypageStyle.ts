import { Rank1, Rank2, Rank3, Rank4, Rank5, Rank6 } from "@/assets";
import styled from "styled-components";

export const MyPageRootWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  //justify-content: center;
  align-items: center;
  ${({ theme }) => theme.fonts.text}
`;

export const UserNickNameWrapper = styled.div`
  display: flex;
  margin-top: 13rem;

  .text {
    margin-right: 1rem;
  }
`;

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
