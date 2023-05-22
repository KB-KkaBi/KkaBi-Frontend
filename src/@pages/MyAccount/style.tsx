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

export const TransactionContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-top: 20.5rem;
  p {
    margin-bottom: 0.2rem;
  }
  div + p {
    margin-top: 4rem;
  }
  button {
    margin-top: 9.5rem;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
