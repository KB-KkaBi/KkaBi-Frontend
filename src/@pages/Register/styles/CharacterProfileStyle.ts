import { CharacterAgo, CharacterBB, CharacterKiKi, CharacterKolly, CharacterLamu } from "@/assets";
import styled from "styled-components";
import paper from "../../../assets/icon/characterBb.svg";

export const CharacterProfileWrapper = styled.div`
  width: 23rem;
  height: 23rem;
  background-color: #fcf9eb;
  border-radius: 4rem;
  display: flex;
  justify-content: center;

  &:first-child {
    margin-right: 0.5rem;
    margin-left: 0rem;
  }
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  &:last-child {
    margin-right: 0rem;
    margin-left: 0.5rem;
  }
`;

export const TestDiv = styled.div`
  width: 20rem;
  height: 20rem;
  background-image: url(${paper});
`;
export const ProfileKiKiImg = styled(CharacterKiKi)`
  width: 20rem;
  height: 20rem;
`;
export const ProfileAgoImg = styled(CharacterAgo)`
  width: 20rem;
  height: 20rem;
`;
export const ProfileBBImg = styled(CharacterBB)`
  width: 20rem;
  height: 20rem;
`;
export const ProfileKollyImg = styled(CharacterKolly)`
  width: 20rem;
  height: 20rem;
`;
export const ProfileLamuImg = styled(CharacterLamu)`
  width: 20rem;
  height: 20rem;
`;
