import { atom } from "recoil";

export const registerEmail = atom({
  key: "registerEmail",
  default: "",
});

export const registerPassword = atom({
  key: "registerPassword",
  default: "",
});

export const registerPasswordConfirm = atom({
  key: "registerPasswordConfirm",
  default: "",
});

export const registerSelectedCharacter = atom({
  key: "selectedCharacter",
  default: "루나키키",
});

// export const registerNickname = atom({
//   key: "registerNickname",
//   default: "",
// });
