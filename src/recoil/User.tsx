import { atom } from "recoil";

export const UserEmail = atom({
  key: "UserEmail",
  default: "",
});

export const UserPassword = atom({
  key: "UserPassword",
  default: "",
});

export const UserPasswordConfirm = atom({
  key: "UserPasswordConfirm",
  default: "",
});

export const UserCharacter = atom({
  key: "UserCharacter",
  default: "루나키키",
});

export const UserNickname = atom({
  key: "UserNickname",
  default: "",
});
