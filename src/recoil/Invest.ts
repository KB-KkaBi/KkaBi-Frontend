import { InvestDataTypes } from "@/core/investData";
import { atom } from "recoil";

export const investData = atom<InvestDataTypes>({
  key: "investData",
  default: {
    answer: "",
    count: 0,
    quizId: 0,
    treasureId: 0,
  },
});
