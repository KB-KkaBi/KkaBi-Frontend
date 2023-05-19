import { LandingLogoIc } from "@/assets";
import landingImage from "src/assets/image/landing.png";
import styled from "styled-components";

export const LandingBackground = styled.div`
  height: 100vh;
  min-height: 100vh;
  width: 100vw;
`;

export const BackgroundWrapper = styled.div`
  background-image: url(${landingImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const LandingLogoIcon = styled(LandingLogoIc)`
  margin-top: 10rem;
`;
