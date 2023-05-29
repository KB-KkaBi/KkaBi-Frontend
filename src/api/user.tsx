import axios from "axios";

export async function getUserInfo() {
  const data = await axios.get(process.env.REACT_APP_DB_HOST + `/api/userInfo`, { withCredentials: true });

  console.log(data.data);
  return data.data;
}
