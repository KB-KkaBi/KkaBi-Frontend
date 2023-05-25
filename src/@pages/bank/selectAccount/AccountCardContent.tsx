import { styled } from "styled-components";


interface CardContentProps {
    id: number;
    type: string;
    infor: string;
  }
  

const AccountCardContent = (props: CardContentProps) => {
  const { id, type, infor} = props;
 
    return (
        <>
            <CardContainer $id={id}>
                <Title>{type}</Title>
                <Content>{infor}</Content>
            </CardContainer>
        </>
  )
}

export default AccountCardContent

const CardContainer = styled.article<{ $id: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ $id }) => ($id % 2 === 0 ? "flex-start" : "flex-end")};

  width: 20rem;
  height: 20rem;

  margin: 1rem;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.log}
  font-weight: bold;
`;

const Content = styled.p`
  ${({ theme }) => theme.fonts.log}
`;