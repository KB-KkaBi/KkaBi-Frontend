export interface MyAccount {
    accountId: number;
    accountName: string;
    accountMoney: number;
    createdAt: string;
    status: string;
    user: {
        userSeq: number;
        email: string;
        pw: string;
        nickname: string;
        character: string;
    },
    accountInfo: {
        accountInfoId: number;
        accountType: string;
        interestRate: any;
        information: string;
        dueDate: number;
    }
  }