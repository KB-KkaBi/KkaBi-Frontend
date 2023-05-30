import axios from "axios";

export async function getUserInfo() {
  const data = await axios.get(`https://kkabi.shop:9000/userInfo`, {
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
