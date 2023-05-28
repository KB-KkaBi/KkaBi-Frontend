import { IconButton } from "@/@components/common";
import { BackArrowIcon } from "@/@components/common/icon/Icons";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import * as S from "./style";

type Props = {
  handleClick?: Function;
  children: JSX.Element | JSX.Element[] | string | string[];
};

/**
 * chilren을 은행 페이지 Background 안에 렌더합니다.
 * @returns
 */
export default function CommonBankLayout({ handleClick = () => {}, children }: Props) {
  const themeContext = useContext(ThemeContext);

  return (
    <S.CommonBackground color={themeContext?.colors.whiteYellow}>
      <S.BankBackground>
        <S.ButtonContainer onClick={() => handleClick()}>
          <IconButton width={15} height={15}>
            <BackArrowIcon width={15} height={15} fillColor="#5f564c" />
          </IconButton>
        </S.ButtonContainer>
        {children}
      </S.BankBackground>
    </S.CommonBackground>
  );
}
