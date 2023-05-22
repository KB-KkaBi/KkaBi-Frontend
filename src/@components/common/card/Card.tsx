import { Account1, Account2, Account3, Account4 } from "@/assets";
import { styled } from "styled-components";

interface CardProps {
  account: number;
}

const Card = (props: CardProps) => {
  const { account } = props;

  function checkAccount() {
    switch (account) {
      case 1:
        return <Account1 />;
      case 2:
        return <Account2 />;
      case 3:
        return <Account3 />;
      case 4:
        return <Account4 />;
      default:
        return;
    }
  }

  return <CardWrapper>{checkAccount()}</CardWrapper>;
};

export default Card;

const CardWrapper = styled.article`
  width: 25rem;
  height: 25rem;

  border-radius: 4rem;
`;
