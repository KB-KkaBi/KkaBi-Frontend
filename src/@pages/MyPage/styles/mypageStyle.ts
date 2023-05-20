import styled from "styled-components";

export const MyPageRootWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.fonts.text}
`;

export const NickNameWrapper = styled.div`
  display: flex;

  .text {
  }
`;
