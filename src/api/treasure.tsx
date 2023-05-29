import axios from "axios";
axios.defaults.withCredentials = true;

export async function getTreasure() {
  const data = await axios.get(process.env.REACT_APP_DB_HOST + `/api/treasure-info`, { withCredentials: true });

  return data.data;
}

export async function postInvestLog(treasureData: any) {
  console.log(treasureData);
  const data = await axios.post(process.env.REACT_APP_DB_HOST + `/api/account-log`, treasureData);

  console.log(data.data);
  return data.data;
}

export async function getMyAccount() {
  const data = await axios.get(process.env.REACT_APP_DB_HOST + `/api/get-account-all`, { withCredentials: true });

  console.log(data.data);
  return data.data;
}

export async function getAccountInfo() {
  const data = await axios.get(process.env.REACT_APP_DB_HOST + `/api/account-info`, { withCredentials: true });

  // console.log(data.data);
  return data.data;
}
