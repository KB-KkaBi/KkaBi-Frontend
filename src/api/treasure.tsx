import axios from "axios";
axios.defaults.withCredentials = true;

export async function getTreasure() {
  const data = await axios.get(`https://kkabi.shop:9000/treasure-info`, {
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

export async function postInvestLog(treasureData: any) {
  console.log(treasureData);
  const data = await axios.post(`https://kkabi.shop:9000/account-log`, treasureData, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: {},
    withCredentials: true,
  });

  console.log(data.data);
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

  console.log(data.data);
  return data.data;
}

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

  // console.log(data.data);
  return data.data;
}
