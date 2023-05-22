interface TreasureDataTypes {
  treasureId: number;
  treasureName: string;
  interestRate: number;
  price: number;
}

export const TREASURES_DATA: TreasureDataTypes[] = [
  { treasureId: 1, treasureName: "루비", interestRate: 0.05, price: 10 },
  { treasureId: 2, treasureName: "반지", interestRate: 0.1, price: 50 },
  { treasureId: 3, treasureName: "왕관", interestRate: 0.15, price: 100 },
  { treasureId: 4, treasureName: "다이아", interestRate: 0.2, price: 500 },
];
