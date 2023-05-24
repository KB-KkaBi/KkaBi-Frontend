import styled from "styled-components";

export const EditPasswordFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.fonts.text}
`;

export const PasswordInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const NewPasswordInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const NewPasswordConfirmInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 18rem;
  margin-bottom: 3rem;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.fonts.text};
  align-items: center;

  .text {
    margin-bottom: 3rem;
  }
`;
