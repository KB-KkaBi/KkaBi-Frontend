import styled from "styled-components";

export const LoginRootContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.fonts.text}
`;

export const EmailInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  margin-bottom: 4rem;
`;

export const PasswordInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 9.5rem;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.fonts.text}
  text-align: center;

  .text {
    margin-bottom: 3rem;
  }
`;
