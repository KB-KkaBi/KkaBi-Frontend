import { Crown, Diamond, Ring, Rubie } from "@/assets";
import { styled } from "styled-components";

export const RubieIcon = styled(Rubie)`
  width: 20rem;
  height: 20rem;
`;

export const RingIcon = styled(Ring)`
  width: 20rem;
  height: 20rem;
`;

export const CrownIcon = styled(Crown)`
  width: 20rem;
  height: 20rem;
`;

export const DiamondIcon = styled(Diamond)`
  width: 20rem;
  height: 20rem;
`;

export const SelectedTitle = styled.h1`
  margin-bottom: 1rem;

  ${({ theme }) => theme.fonts.title}
`;

export const TreasureWrapper = styled.article<{ isClicked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20rem;
  height: 20rem;

  margin: 1rem;

  border-radius: 3rem;

  cursor: pointer;

  border: ${({ isClicked }) => isClicked && 1}px solid ${({ theme }) => theme.colors.main};
  box-shadow: 0rem 0rem ${({ isClicked }) => isClicked && 2}rem
    ${({ theme, isClicked }) => isClicked && theme.colors.main};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.main};
    box-shadow: 0rem 0rem 2rem ${({ theme }) => theme.colors.main};
  }
`;

export const TreasureContentWrapper = styled.article`
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

export const SelectTreasureCntWrapper = styled.div`
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
