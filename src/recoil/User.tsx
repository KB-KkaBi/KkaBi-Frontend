import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userNickname = atom({
  key: "userNickname",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const userSequence = atom({
  key: "userSequence",
  default: -123,
});
