import styled from "styled-components";

export const EditNicknameRootContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.fonts.text}
`;
export const NickNameInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.fonts.text};
  align-items: center;

  .text {
    margin-bottom: 3rem;
  }

`