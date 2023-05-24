import { STAR_FRIENDS } from "@/core/starFriends";
import * as St from "./style";

interface CharacterProps {
  characterName: String;
}

const Character = (props: CharacterProps) => {
  const { characterName } = props;

  function characterImg() {
    switch (characterName) {
      case STAR_FRIENDS.AGO:
        return <St.CharacterAgoImg />;
      case STAR_FRIENDS.BB:
        return <St.CharacterBBImg />;
      case STAR_FRIENDS.KIKI:
        return <St.CharacterKiKiImg />;
      case STAR_FRIENDS.KOLLY:
        return <St.CharacterKollyImg />;
      case STAR_FRIENDS.LAMU:
        return <St.CharacterLamuImg />;
      default:
        return;
    }
  }

  return <St.CharacterWrapper>{characterImg()}</St.CharacterWrapper>;
};

export default Character;
