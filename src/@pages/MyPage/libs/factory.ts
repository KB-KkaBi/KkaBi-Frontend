import { UserType } from "./user.types";
import * as S from "../styles/mypageStyle";

export function getTotalMoney(data: UserType) {
  let totalMoney = 0;

  totalMoney += data.detailMoney.totalDeposit + data.detailMoney.totalSavings + data.detailMoney.totalTreasure;

  return totalMoney;
}
