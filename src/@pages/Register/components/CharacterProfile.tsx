import React, { useCallback } from "react";
import * as S from "../styles/CharacterProfileStyle";
import { STAR_FRIENDS } from "@/core/starFriends";
import { log } from "console";

type Props = {
  characterName: string;
};
const CharacterProfile = ({ characterName }: Props) => {
  console.log("characterName :", characterName);

  function selectCharacter() {
    switch (characterName) {
      case "루나키키":
        return <S.ProfileKiKiImg />;
      case "멜랑콜리":
        return <S.ProfileKollyImg />;
      case "롤로라무":
        return <S.ProfileLamuImg />;
      case "심콩비비":
        return <S.ProfileBBImg />;
      case "포스아거":
        return <S.ProfileAgoImg />;
      default:
        return <S.ProfileAgoImg />;
    }
  }

  return <S.CharacterProfileWrapper>{selectCharacter()}</S.CharacterProfileWrapper>;
};

export default CharacterProfile;
