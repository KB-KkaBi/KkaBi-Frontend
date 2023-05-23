interface AccountTypes {
  accountId: number | any;
  title?: string;
  content?: string;
  name?: string;
}

export const ACCOUNTS_DATA: AccountTypes[] = [
  {
    accountId: 1,
    title: "KB Young Youth 어린이통장",
    content: "어린이 고객 맞춤 입출금이 자유로운 예금",
  },
  { accountId: 2, title: "KB 미래 어린이통장", content: "밝은 미래를 위한 저축, 입출금이 자유로운 예금" },
  { accountId: 3, title: "KB Young Youth 적금", content: "12일 만기 이율 10%" },
  { accountId: 4, title: "KB 미래 적금", content: "6일 만기 이율 5%" },
];

export const REAL_ACCOUNTS: AccountTypes[] = [
  {
    accountId: 1,
    title: "KB Young Youth 어린이통장",
    content: "어린이 고객 맞춤 입출금이 자유로운 예금",
    name: "지수네 통장",
  },
  { accountId: 4, title: "KB Young Youth 적금", content: "12일 만기 이율 10%", name: "적금통장" },
];
