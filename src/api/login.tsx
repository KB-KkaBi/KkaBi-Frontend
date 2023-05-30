import axios from "axios";

export async function postLogin(userData: any) {
  const data = await axios.post(`https://kkabi.shop:9000/login`, userData, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: null,
    withCredentials: true,
  });

  console.debug("debug data: ", data);
  return data;
}
