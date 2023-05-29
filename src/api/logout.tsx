import axios from "axios";

export async function postLogout() {
  const data = await axios.post(`/api/logout`, { withCredentials: true });

  console.log(data);
  return data;
}
