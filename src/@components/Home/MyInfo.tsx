import { styled } from "styled-components";
import { HomeMyInfoIc } from "../../assets";

interface characterNameProps {
  characterName: String;
}

const MyInfo = (props: characterNameProps) => {
  const { characterName } = props;

  return (
    <>
      <HomeMyInfoIc />
    </>
  );
};

export default MyInfo;
