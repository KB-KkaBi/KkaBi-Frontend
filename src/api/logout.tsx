import axios from "axios";

export async function postLogout() {
  const data = await axios.post(process.env.REACT_APP_DB_HOST + `/api/logout`, { withCredentials: true });

  console.log(data);
  return data;
}
