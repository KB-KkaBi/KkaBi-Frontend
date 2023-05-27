import { atom } from "recoil";


export const bankLog = atom({
  key: "bankLog",
  default: {
    accountId: -1,
    accountLogMoney: 0,
    transactionAmount: 0,
    transactionReason: ``,
    transactionType: ``,
  },
});

