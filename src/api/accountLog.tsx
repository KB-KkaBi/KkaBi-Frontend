import axios from "axios";

export async function getTotalAccountLog(accountId: number) {
  const data = await axios.get(`https://kkabi.shop:9000/account-total-log?accountId=${accountId}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: {},
    withCredentials: true,
  });

  return data.data;
}

export async function getAccountLogPagenation(accountId: number, page: number) {
  const data = await axios.get(`https://kkabi.shop:9000/account-log?accountId=${accountId}&size=10&page=${page}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: {},
    withCredentials: true,
  });

  return data.data.content;
}

export async function getAccountName(accountId: number) {
  const data = await axios.get(`https://kkabi.shop:9000/bank?accountId=${accountId}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: {},
    withCredentials: true,
  });

  return data.data.accountName;
}
