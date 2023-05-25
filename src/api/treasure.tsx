import axios from "axios";
axios.defaults.withCredentials = true;

export async function getTreasure() {
  const data = await axios.get(`/api/treasure-info`, { withCredentials: true });

  return data.data;
}

export async function postInvestLog(treasureData: any) {
  const data = await axios.post(`/api/account-log`, treasureData);

  console.log(data.data);
  return data.data;
}

export async function getMyAccount() {
  const data = await axios.get(`/api/get-account-all`, { withCredentials: true });

  console.log(data.data);
  return data.data;
}

export async function getAccountInfo() {
  const data = await axios.get(`/api/account-info`, { withCredentials: true });

  // console.log(data.data);
  return data.data;
}
