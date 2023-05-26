import axios from "axios";

export async function getTotalAccountLog(accountId: number) {
  const data = await axios.get(`/api/account-total-log?accountId=${accountId}`, { withCredentials: true });

  return data.data;
}

export async function getAccountLogPagenation(accountId: number, page: number) {
  const data = await axios.get(`/api/account-log?accountId=${accountId}&size=10&page=${page}`, {
    withCredentials: true,
  });

  return data.data.content;
}
