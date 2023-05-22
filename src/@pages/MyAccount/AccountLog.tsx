export type AccountLogData = {
  date: string;
  withdraw?: number;
  deposit?: number;
  detail?: string;
  balance: number;
};

const AccountLog = () => {
  const accountLogList: AccountLogData[] = [
    { date: "2023-5-14", deposit: 10000, detail: "엄마한테 용돈 받음", balance: 10000 },
    { date: "2023-5-15", deposit: 1000, detail: "설거지", balance: 11000 },
  ];

  return (
    <div>
      <p>깨비 미래 적금</p>
      {accountLogList.map((log) => {
        return <div></div>;
      })}
    </div>
  );
};

export default AccountLog;
