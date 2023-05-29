import axios from "axios";

export async function getUserInfo() {
  const data = await axios.get(`/api/userInfo`, { withCredentials: true });

  console.log(data.data);
  return data.data;
}
