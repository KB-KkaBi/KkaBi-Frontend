import { styled } from "styled-components";
import { IconButtonProps } from "./IconButton";

export const ButtonContainer = styled.div<IconButtonProps>`
  width: ${(props) => props.width}rem;
  height: ${(props) => props.height}rem;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
