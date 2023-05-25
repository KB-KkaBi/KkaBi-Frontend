import { Account1, Account2, Account3, Account4 } from "@/assets";
import { styled } from "styled-components";

export const Account1Icon = styled(Account1)`
  width: 20rem;
  height: 20rem;
`;

export const Account2Icon = styled(Account2)`
  width: 20rem;
  height: 20rem;
`;

export const Account3Icon = styled(Account3)`
  width: 20rem;
  height: 20rem;
`;

export const Account4Icon = styled(Account4)`
  width: 20rem;
  height: 20rem;
`;

export const SelectedTitle = styled.h1`
  margin-bottom: 1rem;

  ${({ theme }) => theme.fonts.title}
`;

export const AccountWrapper = styled.article<{ $isClicked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20rem;
  height: 20rem;

  margin: 1rem;

  border-radius: 3rem;

  cursor: pointer;

  border: ${({ $isClicked }) => $isClicked && 1}px solid ${({ theme }) => theme.colors.main};
  box-shadow: 0rem 0rem ${({ $isClicked }) => $isClicked && 2}rem
    ${({ theme, $isClicked }) => $isClicked && theme.colors.main};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.main};
    box-shadow: 0rem 0rem 2rem ${({ theme }) => theme.colors.main};
  }
`;

export const AccountContentWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 20rem;
  height: 20rem;

  margin: 1rem;

  border-radius: 4rem;
  background-color: ${({ theme }) => theme.colors.whiteYellow};
  ${({ theme }) => theme.fonts.log};
`;

export const FlexBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 1rem;
`;

export const Title = styled.h1`
  width: 60rem;

  margin-top: 1rem;

  ${({ theme }) => theme.fonts.text};
`;

export const SelectAccountCntWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 2rem;

  ${({ theme }) => theme.fonts.button}

  & > p:nth-child(1) {
    display: flex;

    & > p {
      margin: 0 1rem;
      color: ${({ theme }) => theme.colors.main};
    }
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonWrapper = styled.section`
  display: flex;
  justify-content: space-between;

  width: 42rem;

  & > button {
    margin: 0 1rem;
  }
`;

export const BlankCard = styled.div`
  width: 20rem;
  height: 20rem;

  margin: 1rem;
`;
