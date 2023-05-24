import styled from "styled-components";

export const RankListRootContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  //justify-content: center;
  align-items: center;
  ${({ theme }) => theme.fonts.text}
`;

export const TitleWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 6.5rem;
  .text {
    font-size: 8rem;
  }
`;

export const RankInfoContainer = styled.div`
  display: grid;
  column-gap: 10rem;
  row-gap: 4.5rem;
  //grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: column; /* 컨테이너 내 아이템을 세로로 배치 */
`;

export const EachRankContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const RankImg = styled.img`
  margin-right: 3rem;
`;
export const RankText = styled.p`
  font-size: 6rem;
  text-align: center;
`;
