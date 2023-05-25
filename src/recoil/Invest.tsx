import { atom } from "recoil";

export const investInfo = atom({
  key: "investInfo",
  default: {
    accountId: 0,
    treasureId: 0,
    count: 0,
  },
});
