import styled from "styled-components";
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
    & fieldset,
    &:hover fieldset,
    &.Mui-focused fieldset {
      border: 0;
    }
  }
`;
