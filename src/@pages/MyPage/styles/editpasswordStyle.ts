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
  margin-top: 8rem;
  margin-bottom: 4rem;
`;

export const NewPasswordInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 9.5rem;
`;

export const NewPasswordConfirmInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 9.5rem;
`;
