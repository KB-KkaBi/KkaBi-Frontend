import axios from "axios";

export async function postLogout() {
  const data = await axios.post(`https://kkabi.shop:9000/logout`, { withCredentials: true });

  console.log(data);
  return data;
}
