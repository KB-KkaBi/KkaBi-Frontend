import { styled } from "styled-components";

export const BottomButtonContainer = styled.div`
  position: absolute;
  bottom: 6rem;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 3.6rem;
  width: 100%;
`;

export const TextContainer = styled.div`
  margin: 9rem auto 0 auto;
  display: block;
  text-align: center;
  width: fit-content;
  ${({ theme }) => theme.fonts.button}
`;

export const Guide = styled.p`
  ${({ theme }) => theme.fonts.button}
  margin-bottom: 2.5rem;
`;

export const Won = styled.p<{ color?: string }>`
  ${({ theme }) => theme.fonts.won}
  margin-bottom: 2.5rem;
  ${(props) => (props.color ? `color: ${props.color};` : "")}
`;
