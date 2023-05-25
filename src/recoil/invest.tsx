import { atom } from "recoil";

export const investTreasure = atom<number[]>({
  key: "investTreasure",
  default: [],
});
