import accountLogImage from "@/assets/image/account_log.png";
import bankImage from "@/assets/image/bank_main.png";
import paperImage from "@/assets/image/vector-9.png";
import styled from "styled-components";

export const CommonBackground = styled.div<{ color: string }>`
  height: 100vh;
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.color};
  overflow: hidden;
`;

export const PaperBackground = styled.div`
  background-image: url(${paperImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  background-color: transparent;
  margin: 4.5rem 5rem;
  width: calc(100% - 10rem);
  height: calc(100% - 9rem);
`;

export const BankBackground = styled.div`
  background-image: url(${bankImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  background-color: ${(props) => props.theme.colors.whiteYellow};
  width: 100%;
  height: 100%;
  margin: 0;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 7rem;
  left: 9rem;
  z-index: 1;
  cursor: pointer;
`;

export const TransactionLogBackground = styled.div`
  background-image: url(${accountLogImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  background-color: transparent;
  width: 100%;
  height: 100%;
  margin: 0;
`;
