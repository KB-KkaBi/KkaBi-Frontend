import { atom } from "recoil";

export const selectedButtonIndex = atom({
  key: "selectedButtonIndex",
  default: new Set(),
});

export const selectedButtonArray = atom({
  key: "assembledString",
  default: new Array<string>(),
});
