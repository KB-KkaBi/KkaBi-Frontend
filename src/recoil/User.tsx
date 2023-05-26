import { atom } from "recoil";

export const userNickname = atom({
  key: "userNickname",
  default: "",
});

export const userSequence = atom({
  key: "userSequence",
  default: -123,
});
