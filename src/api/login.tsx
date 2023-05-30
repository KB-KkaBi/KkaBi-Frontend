import axios from "axios";

export async function postLogin(userData: any) {
  const data = await axios.post(`https://kkabi.shop:9000/login`, userData, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: {},
    withCredentials: true,
  });

  console.log("debug data: ", data);
  return data;
}
