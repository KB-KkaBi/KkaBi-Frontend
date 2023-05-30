import axios from "axios";

export async function getAccountInfo() {
  const data = await axios.get(`https://kkabi.shop:9000/account-info`, {
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

export async function getMyAccount() {
  const data = await axios.get(`https://kkabi.shop:9000/get-account-all`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: {},
    withCredentials: true,
  });

  // console.log(data.data);
  return data.data;
}

export async function postNewAccount(formData: any) {
  const data = await axios.post(`https://kkabi.shop:9000/create-account`, formData, {
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

export async function postAccountLog(formData: any) {
  const data = await axios.post(`https://kkabi.shop:9000/account-log`, formData, {
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

export async function getMyOneAccount(id: number) {
  const data = await axios.get(`https://kkabi.shop:9000/bank?accountId=${id}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: {},
    withCredentials: true,
  });

  return data.data.accountMoney;
}
