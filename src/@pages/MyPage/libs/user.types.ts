export type UserType = {
  nickname: string;
  character: string;
  detailMoney: {
    totalDeposit: number;
    totalSavings: number;
    totalTreasure: number;
  };
  detailTreasure: {
    treasure1: number;
    treasure2: number;
    treasure3: number;
    treasure4: number;
  };
};
