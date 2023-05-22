import { IconButton } from "@/@components/common";
import { BackArrowIcon } from "@/@components/common/icon/Icons";
import * as S from "./style";

type Props = {
  handleClick?: Function;
  children: JSX.Element | JSX.Element[] | string | string[];
};

/**
 * chilren을 종이모양 Background 안에 렌더합니다.
 * @returns
 */
export default function CommonPaperLayout({ handleClick, children }: Props) {
  // const themeContext = useContext(ThemeContext);
  return (
    <S.CommonBackground color="#5f564c">
      {!!handleClick && (
        <S.ButtonContainer onClick={() => handleClick()}>
          <IconButton width={15} height={15}>
            <BackArrowIcon width={15} height={15} fillColor="#5f564c" />
          </IconButton>
        </S.ButtonContainer>
      )}
      <S.PaperBackground>{children}</S.PaperBackground>
    </S.CommonBackground>
  );
}
