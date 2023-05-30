import axios from "axios";

export async function getTotalAccountLog(accountId: number) {
  const data = await axios.get(`https://kkabi.shop:9000/account-total-log?accountId=${accountId}`, {
    withCredentials: true,
  });

  return data.data;
}

export async function getAccountLogPagenation(accountId: number, page: number) {
  const data = await axios.get(`https://kkabi.shop:9000/account-log?accountId=${accountId}&size=10&page=${page}`, {
    withCredentials: true,
  });

  return data.data.content;
}

export async function getAccountName(accountId: number) {
  const data = await axios.get(`https://kkabi.shop:9000/bank?accountId=${accountId}`, { withCredentials: true });

  return data.data.accountName;
}
