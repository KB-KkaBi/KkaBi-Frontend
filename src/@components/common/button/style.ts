import styled from "styled-components";
import Button from "@mui/material/Button";

export const CommonStyledButton = styled(Button)`
  && {
    height: 10rem;
    width: 40rem;
    border-radius: 4rem;
    background-color: ${(props) => props.theme.colors.main};
    color: #fff;
    ${(props) => props.theme.fonts.button}
    &: hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.colors.main};
    }
  }
`;
