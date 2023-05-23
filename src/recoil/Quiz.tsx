import { atom } from "recoil";

export const selectedButtonIndex = atom<number[]>({
  key: "selectedButtonIndex",
  default: [],
});

export const selectedButtonArray = atom<string[]>({
  key: "assembledString",
  default: [],
});
