import React from "react";

import * as S from "./style";

type Props = {
  handleClick?: Function;
  children: JSX.Element | JSX.Element[] | string | string[];
};
const LandingLayout = ({ children }: Props) => {
  return (
    <>
      <S.LandingBackground>
        <S.BackgroundWrapper>
          {/* <S.LandingLogoIcon /> */}
          {children}
        </S.BackgroundWrapper>
      </S.LandingBackground>
    </>
  );
};

export default LandingLayout;
