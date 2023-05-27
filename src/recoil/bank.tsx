import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const bankLog = atom({
  key: "bankLog",
  default: {
    accountId: -1,
    accountLogMoney: 0,
    transactionAmount: 0,
    transactionReason: ``,
    transactionType: ``,
  },
  effects_UNSTABLE: [persistAtom],
});
