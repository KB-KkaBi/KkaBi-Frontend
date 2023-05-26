import { styled } from "styled-components";

export const TransactionTitle = styled.p`
  position: absolute;
  top: 11%;
  left: 50%;
  transform: translate(-50%, 0%);
  ${(props) => props.theme.fonts.title};
`;

export const TransactionSubTitle = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  top: 23.4%;
  ${(props) => props.theme.fonts.button};
`;

export const TransactionLogsContainer = styled.div`
  position: relative;
  top: 29.7%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const LogDetail = styled.div`
  position: relative;
  width: 100%;
  height: 5.7rem;
  ${(props) => props.theme.fonts.log};
`;

export const TransactionDate = styled.p`
  position: absolute;
  left: 6.25%;
`;

export const WithdrawAmount = styled.div`
  position: absolute;
  left: 22.1%;
  display: flex;
  align-items: center;
`;

export const DepositAmount = styled.div`
  position: absolute;
  left: 36%;
  display: flex;
  align-items: center;
`;

export const TransactionDetail = styled.p`
  position: absolute;
  left: 50.3%;
`;

export const Balance = styled.div`
  position: absolute;
  left: 78%;
  display: flex;
  align-items: center;
`;

export const Won = styled.p`
  ${(props) => props.theme.fonts.won}
`;

export const ArrowBox = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 21rem;

  color: ${({ theme }) => theme.colors.deepBlue};
  ${({ theme }) => theme.fonts.button};
`;

export const ArrowWrapper = styled.section`
  display: flex;
  justify-content: center;

  position: absolute;
  bottom: 1.5rem;

  width: 100%;
`;
