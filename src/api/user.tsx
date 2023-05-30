import axios from "axios";

export async function getUserInfo() {
  const data = await axios.get(`https://kkabi.shop:9000/userInfo`, { withCredentials: true });

  console.log(data.data);
  return data.data;
}
