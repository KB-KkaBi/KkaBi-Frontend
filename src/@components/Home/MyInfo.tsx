import { styled } from "styled-components";
import {
  HomeMyInfoIc,
  MiniProfileAgo,
  MiniProfileBB,
  MiniProfileKiKi,
  MiniProfileKolly,
  MiniProfileLamu,
} from "../../assets";
import { STAR_FRIENDS } from "@/core/starFriends";

interface characterNameProps {
  characterName: String;
}

const MyInfo = (props: characterNameProps) => {
  const { characterName } = props;

  function miniProfile() {
    switch (characterName) {
      case STAR_FRIENDS.AGO:
        return <MiniProfileAgo />;
      case STAR_FRIENDS.BB:
        return <MiniProfileBB />;
      case STAR_FRIENDS.KIKI:
        return <MiniProfileKiKi />;
      case STAR_FRIENDS.KOLLY:
        return <MiniProfileKolly />;
      case STAR_FRIENDS.LAMU:
        return <MiniProfileLamu />;

      default:
        return;
    }
  }

  return (
    <>
      {miniProfile()}
      <HomeMyInfoIc />
    </>
  );
};

export default MyInfo;
