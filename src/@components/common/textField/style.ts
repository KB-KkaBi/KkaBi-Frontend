import styled, { css } from "styled-components";
import TextField from "@mui/material/TextField";

export const CommonStyledInput = styled(TextField)`
  && {
    .MuiInputBase-input {
      padding: 0 3.54rem;
      ${(props) => props.theme.fonts.button}
      &::placeholder {
        color: #aaaaaa;
        opacity: 1;
      }
    }
  }
  & .MuiOutlinedInput-root {
    width: 65rem;
    height: 10rem;
    border-radius: 4rem;
    background-color: ${(props) => props.theme.colors.whiteYellow};
    border: 0;
    ${(props) => props.theme.fonts.text}
    ${(props) =>
      props.error &&
      css`
        border: 1px solid red;
      `}

    & fieldset,
    &:hover fieldset,
    &.Mui-focused fieldset {
      border: 0;
    }
  }
  & .MuiFormHelperText-root {
    /* helperText의 스타일 */
    /* 추가적인 스타일 조정 */
    ${(props) => props.theme.fonts.text}
    font-size: 2rem; /* 원하는 글씨 크기로 조정 */
    height: 3rem;
  }
`;
