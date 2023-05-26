import { atom } from "recoil";

export interface InvestDTO {
  quizId: number;
  accountId: number;
  treasureId: number;
  count: number;
  answer: string;
}

export const investInfo = atom<InvestDTO>({
  key: "investInfo",
  default: {
    accountId: 0,
    treasureId: 0,
    count: 0,
    quizId: 0,
    answer: "",
  },
});
