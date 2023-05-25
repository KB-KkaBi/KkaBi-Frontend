import { atom } from "recoil";

export const userNickname = atom({
  key: "userNickname",
  default: "",
});

export const userSeq = atom({
  key: "userSequence",
  default: -123,
});
