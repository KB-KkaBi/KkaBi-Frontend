import axios from "axios";

export async function getAccountInfo() {
  const data = await axios.get(`https://kkabi.shop:9000/account-info`, { withCredentials: true });
  return data.data;
}

export async function getMyAccount() {
  const data = await axios.get(`https://kkabi.shop:9000/get-account-all`, { withCredentials: true });

  // console.log(data.data);
  return data.data;
}

export async function postNewAccount(formData: any) {
  const data = await axios.post(`https://kkabi.shop:9000/create-account`, formData, { withCredentials: true });

  return data.data;
}

export async function postAccountLog(formData: any) {
  const data = await axios.post(`https://kkabi.shop:9000/account-log`, formData, { withCredentials: true });

  return data.data;
}

export async function getMyOneAccount(id: number) {
  const data = await axios.get(`https://kkabi.shop:9000/bank?accountId=${id}`, { withCredentials: true });

  return data.data.accountMoney;
}
