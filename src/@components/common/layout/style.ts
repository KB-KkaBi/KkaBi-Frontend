import paperImage from "src/assets/vector-9.png";
import styled from "styled-components";

export const CommonBackground = styled.div`
  height: 100vh;
  min-height: 100vh;
  width: 100vw;
  background-color: #5f564c;
  padding: 4.5rem 5rem;
`;

export const PaperBackground = styled.div`
  background-image: url(${paperImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  background-color: transparent;
  width: 100%;
  height: 100%;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 7rem;
  left: 9rem;
  z-index: 1;
`;
