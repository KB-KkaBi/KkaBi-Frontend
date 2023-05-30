import axios from "axios";

export async function postLogout() {
  const data = await axios.post(`https://kkabi.shop:9000/logout`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: null,
    withCredentials: true,
  });

  console.debug(data);
  return data;
}
