import * as S from "./style";

interface CardProps {
  account: number;
  onClick: () => void;
  isClicked: boolean;
  onMouseEnter: () => void;
  onMouseOut: () => void;
}

const AccountCard = (props: CardProps) => {
  const { account, onClick, isClicked, onMouseEnter, onMouseOut } = props;

  function checkAccount() {
    switch (account) {
      case 1:
        return <S.Account1Icon />;
      case 2:
        return <S.Account2Icon />;
      case 3:
        return <S.Account3Icon />;
      case 4:
        return <S.Account4Icon />;
      default:
        return;
    }
  }

  return (
    <S.AccountWrapper onClick={onClick} $isClicked={isClicked} onMouseEnter={onMouseEnter} onMouseOut={onMouseOut}>
      {checkAccount()}
    </S.AccountWrapper>
  );
};

export default AccountCard;
