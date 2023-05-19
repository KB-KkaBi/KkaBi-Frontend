import landingImage from "src/assets/image/landing.png";
import styled from "styled-components";

export const LandingBackground = styled.div`
  height: 102.4rem;
  background-repeat: no-repeat;
  width: 144rem;
  background-size: 100% 100%;
  background-image: url(${landingImage});
  z-index: 1;
  display: flex;
  justify-content: center;
`;
