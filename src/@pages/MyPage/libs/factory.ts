import { UserInfoDataTypes } from "@/core/userInfoData";

export function getTotalMoney(data: UserInfoDataTypes) {
  let totalMoney = 0;

  totalMoney += data.detailMoney.totalDeposit + data.detailMoney.totalSavings + data.detailMoney.totalTreasure;

  return totalMoney;
}

export const calculatePercentage = (value: number, total: number) => {
  if (total === 0) return 0;
  const percentage = (value / total) * 100;
  return parseFloat(percentage.toFixed(2)); // 소수점 2자리까지 반올림
};
